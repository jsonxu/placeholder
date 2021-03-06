/*
 *作者：xukai
 *date:2015-03-18
 *模块说明：针对输入框placeholder功能的插件，使IE678也支持placeholder
 *参数：ID字符串，带双引号
 *调用示例：$.placeholder("#idName");
 */
$.placeholder = function (selector) { //输入框默认提示文字切换功能
            if ($.browser.msie && ($.browser.version == "5.0" || $.browser.version == "6.0" || $.browser.version == "7.0" || $.browser.version == "8.0")) {
                //ie5,6,7,8下执行该区域代码，其他浏览器在Input上加placeholder="请输入关键字"可自动实现
                var $input = $(selector);
                var $txt = $input.attr('placeholder');
                $input.val($txt);
                if ($.trim($input.val()) == $txt) {//初始化颜色
                        $input.css('color', '#999');
                    }
                $input.focus(function(event) {
                    if ($.trim($input.val()) == $txt) {
                        $input.val("");
                        $input.css('color', '#333');
                    }
                });
                $input.blur(function(event) {
                    if ($.trim($input.val()) == "") {
                        $input.val($txt);
                        $input.css('color', '#999');
                    }
                });
            }
        };