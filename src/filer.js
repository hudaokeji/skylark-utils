define([
    "./skylark",
    "./langx",
    "./async",
    "./eventer",
    "./styler"
], function(skylark, langx, async,eventer,styler) {
    var on = eventer.on,
        attr = eventer.attr,
        Deferred = async.Deferred,

        fileInput,
        fileInputForm,
        fileSelected,
        maxFileSize = 1 / 0;

    function selectFile(callback) {
        fileSelected = callback;
        if (!fileInput) {
            var input = fileInput = document.createElement("input");

            function selectFiles(pickedFiles) {
                for (var i = pickedFiles.length; i--;) {
                    if (pickedFiles[i].size > maxFileSize) {
                        pickedFiles.splice(i, 1);
                    }
                }
                fileSelected(pickedFiles);
            }

            input.type = "file";
            input.style.position = "fixed",
                input.style.left = 0,
                input.style.top = 0,
                input.style.opacity = .001,
                document.body.appendChild(input);

            input.onchange = function(e) {
                selectFiles(Array.prototype.slice.call(e.target.files));
                // reset to "", so selecting the same file next time still trigger the change handler
                input.value = "";
            };
        }
        fileInput.click();
    }

    var filer = function() {
        return filer;
    };

    langx.mixin(filer , {
        dropzone: function(elm, params) {
            params = params || {};
            var hoverClass = params.hoverClass || "dropzone",
                droppedCallback = params.dropped;

            var enterdCount = 0;
            on(elm, "dragenter", function(e) {
                if (e.dataTransfer && e.dataTransfer.types.indexOf("Files")>-1) {
                    eventer.stop(e);
                    enterdCount ++;
                    styler.addClass(elm,hoverClass)
                }
            });

            on(elm, "dragover", function(e) {
                if (e.dataTransfer && e.dataTransfer.types.indexOf("Files")>-1) {
                    eventer.stop(e);
                }
            });


            on(elm, "dragleave", function(e) {
                if (e.dataTransfer && e.dataTransfer.types.indexOf("Files")>-1) {
                    enterdCount--
                    if (enterdCount==0) {
                        styler.removeClass(elm,hoverClass);
                    }
                }
            });

            on(elm, "drop", function(e) {
                if (e.dataTransfer && e.dataTransfer.types.indexOf("Files")>-1) {
                    styler.removeClass(elm,hoverClass)
                    eventer.stop(e);
                    if (droppedCallback) {
                        droppedCallback(e.dataTransfer.files);
                    }
                }
            });


            return this;
        },

        picker: function(elm, params) {
            params = params || {};

            var pickedCallback = params.picked;

            on(elm, "click", function(e) {
                e.preventDefault();
                selectFile(pickedCallback);
            });
            return this;
        },

        readFile : function(file,params) {
            params = params || {};
            var d = new Deferred,
                reader = new FileReader();
            
            reader.onload = function(evt) {
                d.resolve(evt.target.result);
            };
            reader.onerror = function(e) {
                var code = e.target.error.code;
                if (code === 2) {
                    alert('please don\'t open this page using protocol fill:///');
                } else {
                    alert('error code: ' + code);
                }
            };
            
            if (params.asArrayBuffer){
                reader.readAsArrayBuffer(file);
            } else if (params.asDataUrl) {
                reader.readAsDataURL(file);                
            } else if (params.asText) {
                reader.readAsText(file);
            } else {
                reader.readAsArrayBuffer(file);
            }

            return d.promise;
        },

        writeFile : function(dataUri,name) {
            if (window.navigator.msSaveBlob) { 
             　　var blob = dataURItoBlob(dataUri);
               window.navigator.msSaveBlob(blob, name);
            } else {
                var a = document.createElement('a');
                a.href = dataUri;
                a.setAttribute('download', name || 'noname');
                a.dispatchEvent(new CustomEvent('click'));
            }              
        }


    });

    return skylark.filer = filer;
});
