/* --------------------------------------------------------------
    Excerptize jQuery Plugin 
    by zig@elegrit.com
-------------------------------------------------------------- */

(function($) {
    $.fn.excerptize = function(options) {
            var defaults = {
                numberOfCharacters: 100,
                cutOffAtWord: true,
                tags: 'span',
                showMoreText: '[...]',
                showLessText: 'less',
                afterInitCallback: null,
                beforeShowMoreCallback: null,
                afterShowMoreCallback: null,
                beforeShowLessCallback: null,
                afterShowLessCallback: null
            };
            
            options = $.extend(defaults, options);
            
            $(this).each(function(){
                var excerptizedObj = $(this),
                fullText = excerptizedObj.text(),
                excerpt = fullText.substr(0, options.numberOfCharacters),
                excerptized = '';
            
                // if full text is less than or equal to excerpt, don't bother
                if(fullText.length<=options.numberOfCharacters) {
                    return;
                }
                
                if(options.cutOffAtWord) {
                    excerpt = excerpt.substr(0, Math.min(excerpt.length, excerpt.lastIndexOf(" ")))
                }
               
                excerptizedObj.html(getExcerptized(excerpt, fullText, options));   
                
                if (typeof options.afterInitCallback == 'function') { 
                    options.afterInitCallback(excerptizedObj); 
                }         
                
                bindControls(excerptizedObj, options);  
                
                // To avoid the flicker when page first loads,
                // you can make the 'excerptized' element hidden.
                // This will ensure excerpt is displayed.
                excerptizedObj.show(); 
            });            
    }
    
    // private functions    
    
    function getExcerptized(excerpt, fullText, options) {
        return excerpt
                + ' <a href="#" class="excerptized-show-more">'
                + options.showMoreText
                + '</a>'
                + '<'+options.tags+' style="display:none;">'
                + fullText.substr(excerpt.length)
                + '<a href="#" class="excerptized-show-less">'
                + options.showLessText + '</a>'
                + '</'+options.tags+'>';
    }    
    
    function bindControls(excerptizedObj, options) {
        excerptizedObj.find('.excerptized-show-more').click(function(){            

            if (typeof options.beforeShowMoreCallback == 'function') { 
                options.beforeShowMoreCallback(excerptizedObj); 
            }
            
            $(this).hide();
            $(this).next().show();
            
            if (typeof options.afterShowMoreCallback == 'function') { 
                options.afterShowMoreCallback(excerptizedObj); 
            }
            return false;
        });
        
        excerptizedObj.find('.excerptized-show-less').click(function(){           

            if (typeof options.beforeShowLessCallback == 'function') { 
                options.beforeShowLessCallback(excerptizedObj); 
            }
            
            $(this).parent().hide(); 
            excerptizedObj.find('.excerptized-show-more').show();           

            if (typeof options.afterShowLessCallback == 'function') { 
                options.afterShowLessCallback(excerptizedObj); 
            }
            
            return false;
        });
    }
})(jQuery);
