var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by Administrator on 2016/5/24.
 */
///<reference path="../../../scripts/libs/lib.d.ts"/>
///<reference path="../../../scripts/btop/btop.hui.d.ts"/>
///<reference path="../../../scripts/bns/btop.bui.d.ts"/>
///<reference path="../../../scripts/libs/jQuery.d.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var Page = btop.hui.Page;
        var PageManager = btop.hui.PageManager;
        var Native = btop.hui.Native;
        var Global = btop.hui.Global;
        var PdfBrowse = (function (_super) {
            __extends(PdfBrowse, _super);
            function PdfBrowse() {
                _super.apply(this, arguments);
            }
            PdfBrowse.prototype.initView = function () {
                this.address = this.data["financingDoc"]["address"];
                var start = this.address.indexOf("resources/") + 10;
                var pdfPartPath = this.address.substring(start, this.address.length);
                var remotePath = "http://192.156.33.186:9091/brcb_bip/resource/" + pdfPartPath; //服务器文件路径
                var savePath = "/storage/emulated/0/Android/bns/download/" + pdfPartPath; //保存到本地的文件路径
                Native.asyncCall("FileService", "downloadFile", [remotePath, savePath], function (success, error, result) {
                    if (success) {
                        //
                        // If absolute URL from the remote server is provided, configure the CORS
                        // header on that server.
                        //
                        var url = savePath;
                        //
                        // Disable workers to avoid yet another cross-origin issue (workers need
                        // the URL of the script to be loaded, and dynamically loading a cross-origin
                        // script does not work).
                        //
                        // PDFJS.disableWorker = true;
                        //
                        // In cases when the pdf.worker.js is located at the different folder than the
                        // pdf.js's one, or the pdf.js is executed via eval(), the workerSrc property
                        // shall be specified.
                        //
                        //PDFJS.workerSrc = '../../build/pdf.worker.js';
                        var pdfDoc = null, pageNum = 1, pageRendering = false, pageNumPending = null, scale = 0.8, canvas = document.getElementById('the-canvas'), ctx = canvas.getContext('2d');
                        /**
                         * Get page info from document, resize canvas accordingly, and render page.
                         * @param num Page number.
                         */
                        function renderPage(num) {
                            pageRendering = true;
                            // Using promise to fetch the page
                            pdfDoc.getPage(num).then(function (page) {
                                var viewport = page.getViewport(scale);
                                canvas.height = viewport.height;
                                canvas.width = viewport.width;
                                // Render PDF page into canvas context
                                var renderContext = {
                                    canvasContext: ctx,
                                    viewport: viewport
                                };
                                var renderTask = page.render(renderContext);
                                // Wait for rendering to finish
                                renderTask.promise.then(function () {
                                    pageRendering = false;
                                    if (pageNumPending !== null) {
                                        // New page rendering is pending
                                        renderPage(pageNumPending);
                                        pageNumPending = null;
                                    }
                                });
                            });
                            // Update page counters
                            document.getElementById('page_num').textContent = pageNum;
                        }
                        /**
                         * If another page rendering in progress, waits until the rendering is
                         * finised. Otherwise, executes rendering immediately.
                         */
                        function queueRenderPage(num) {
                            if (pageRendering) {
                                pageNumPending = num;
                            }
                            else {
                                renderPage(num);
                            }
                        }
                        /**
                         * Displays previous page.
                         */
                        function onPrevPage() {
                            if (pageNum <= 1) {
                                return;
                            }
                            pageNum--;
                            queueRenderPage(pageNum);
                        }
                        document.getElementById('prev').addEventListener('click', onPrevPage);
                        /**
                         * Displays next page.
                         */
                        function onNextPage() {
                            if (pageNum >= pdfDoc.numPages) {
                                return;
                            }
                            pageNum++;
                            queueRenderPage(pageNum);
                        }
                        document.getElementById('next').addEventListener('click', onNextPage);
                        /**
                         * Asynchronously downloads PDF.
                         */
                        PDFJS.getDocument(url).then(function (pdfDoc_) {
                            pdfDoc = pdfDoc_;
                            document.getElementById('page_count').textContent = pdfDoc.numPages;
                            // Initial/first page rendering
                            renderPage(pageNum);
                        });
                        Global.LoadingToast.hide();
                    }
                    else {
                        Global.LoadingToast.hide();
                        bui.BGlobal.Alert.show({ title: '提示', content: 'pdf加载失败！' });
                    }
                });
                //返回销售主页
                $(this.nodeTypeMap.get('openPeiZhiPage1Page')).click(function () {
                    var currentPage = 1;
                    PageManager.to('btop.bui.LiCaiChanPinPage');
                });
            };
            return PdfBrowse;
        })(Page);
        bui.PdfBrowse = PdfBrowse;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=PdfBrowse.js.map