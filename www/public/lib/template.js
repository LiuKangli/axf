/**
 * baiduTemplate锟津单猴拷锟矫碉拷Javascript模锟斤拷锟斤拷锟斤拷 1.0.6 锟芥本
 * http://baidufe.github.com/BaiduTemplate
 * 锟斤拷源协锟介：BSD License
 * 锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷占锟斤拷锟斤拷锟斤拷锟秸硷拷 baidu.template 锟斤拷nodejs锟斤拷锟斤拷直锟接帮拷装 npm install baidutemplate
 * @param str{String} dom锟斤拷锟斤拷ID锟斤拷锟斤拷锟斤拷模锟斤拷string
 * @param data{Object} 锟斤拷要锟斤拷染锟斤拷json锟斤拷锟襟，匡拷锟斤拷为锟秸★拷锟斤拷data为{}时锟斤拷锟斤拷然锟斤拷锟斤拷html锟斤拷
 * @return 锟斤拷锟斤拷锟斤拷data锟斤拷直锟接凤拷锟截憋拷锟斤拷锟斤拷锟侥猴拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷data锟斤拷锟斤拷锟斤拷html锟斤拷
 * @author wangxiao
 * @email 1988wangxiao@gmail.com
*/

;(function(window){

    //取锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷baidu锟斤拷锟斤拷锟秸间，锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷commonjs锟芥范exports锟斤拷去
    //锟斤拷锟斤拷锟斤拷nodejs锟斤拷锟斤拷锟铰ｏ拷锟斤拷锟斤拷baidu.template锟斤拷锟斤拷锟斤拷
    var baidu = typeof module === 'undefined' ? (window.baidu = window.baidu || {}) : module.exports;

    //模锟藉函锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷baidu.template锟斤拷锟斤拷锟秸硷拷锟铰ｏ拷
    baidu.template = function(str, data){

        //锟斤拷锟斤拷锟角凤拷锟叫革拷id锟斤拷元锟截达拷锟节ｏ拷锟斤拷锟斤拷锟斤拷元锟斤拷锟斤拷锟斤拷取元锟截碉拷innerHTML/value锟斤拷锟斤拷锟斤拷锟斤拷为锟街凤拷锟斤拷为模锟斤拷
        var fn = (function(){

            //锟叫讹拷锟斤拷锟斤拷没锟斤拷document锟斤拷锟斤拷为锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷
            if(!window.document){
                return bt._compile(str);
            };

            //HTML5锟芥定ID锟斤拷锟斤拷锟斤拷锟轿何诧拷锟斤拷锟斤拷锟秸革拷锟街凤拷锟斤拷锟街凤拷锟斤拷锟斤拷锟斤拷
            var element = document.getElementById(str);
            if (element) {

                //取锟斤拷锟斤拷应id锟斤拷dom锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷HTML模锟藉函锟斤拷
                if (bt.cache[str]) {
                    return bt.cache[str];
                };

                //textarea锟斤拷input锟斤拷取value锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷取innerHTML
                var html = /^(textarea|input)$/i.test(element.nodeName) ? element.value : element.innerHTML;
                return bt._compile(html);

            }else{

                //锟斤拷模锟斤拷锟街凤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷一锟斤拷锟斤拷锟斤拷
                //锟斤拷锟斤拷直锟接达拷锟斤拷锟街凤拷锟斤拷锟斤拷为模锟藉，锟斤拷锟斤拷锟杰变化锟斤拷锟洁，锟斤拷锟剿诧拷锟斤拷锟角伙拷锟斤拷
                return bt._compile(str);
            };

        })();

        //锟斤拷锟斤拷锟斤拷锟津返伙拷HTML锟街凤拷锟斤拷锟斤拷没锟斤拷锟斤拷锟斤拷锟津返回猴拷锟斤拷 支锟斤拷data={}锟斤拷锟斤拷锟斤拷
        var result = bt._isObject(data) ? fn( data ) : fn;
        fn = null;

        return result;
    };

    //取锟斤拷锟斤拷锟斤拷锟秸硷拷 baidu.template
    var bt = baidu.template;

    //锟斤拷锟角碉拷前锟芥本
    bt.versions = bt.versions || [];
    bt.versions.push('1.0.6');

    //锟斤拷锟斤拷  锟斤拷锟斤拷应id模锟斤拷锟斤拷锟缴的猴拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷
    bt.cache = {};

    //锟皆讹拷锟斤拷锟街革拷锟斤拷锟斤拷锟斤拷锟皆猴拷锟斤拷锟斤拷锟斤拷锟叫碉拷锟街凤拷锟斤拷锟斤拷锟斤拷锟斤拷HTML注锟酵匡拷头 <! !>
    bt.LEFT_DELIMITER = bt.LEFT_DELIMITER||'<%';
    bt.RIGHT_DELIMITER = bt.RIGHT_DELIMITER||'%>';

    //锟皆讹拷锟斤拷默锟斤拷锟角凤拷转锟藉，默锟斤拷为默锟斤拷锟皆讹拷转锟斤拷
    bt.ESCAPE = true;

    //HTML转锟斤拷
    bt._encodeHTML = function (source) {
        return String(source)
            .replace(/&/g,'&amp;')
            .replace(/</g,'&lt;')
            .replace(/>/g,'&gt;')
            .replace(/\\/g,'&#92;')
            .replace(/"/g,'&quot;')
            .replace(/'/g,'&#39;');
    };

    //转锟斤拷影锟斤拷锟斤拷锟斤拷锟斤拷锟街凤拷
    bt._encodeReg = function (source) {
        return String(source).replace(/([.*+?^=!:${}()|[\]/\\])/g,'\\$1');
    };

    //转锟斤拷UI UI锟斤拷锟斤拷使锟斤拷锟斤拷HTML页锟斤拷锟斤拷签onclick锟斤拷锟铰硷拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷
    bt._encodeEventHTML = function (source) {
        return String(source)
            .replace(/&/g,'&amp;')
            .replace(/</g,'&lt;')
            .replace(/>/g,'&gt;')
            .replace(/"/g,'&quot;')
            .replace(/'/g,'&#39;')
            .replace(/\\\\/g,'\\')
            .replace(/\\\//g,'\/')
            .replace(/\\n/g,'\n')
            .replace(/\\r/g,'\r');
    };

    //锟斤拷锟街凤拷锟斤拷拼锟斤拷锟斤拷锟缴猴拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷(compile)
    bt._compile = function(str){
        var funBody = "var _template_fun_array=[];\nvar fn=(function(__data__){\nvar _template_varName='';\nfor(name in __data__){\n_template_varName+=('var '+name+'=__data__[\"'+name+'\"];');\n};\neval(_template_varName);\n_template_fun_array.push('"+bt._analysisStr(str)+"');\n_template_varName=null;\n})(_template_object);\nfn = null;\nreturn _template_fun_array.join('');\n";
        return new Function("_template_object",funBody);
    };

    //锟叫讹拷锟角凤拷锟斤拷Object锟斤拷锟斤拷
    bt._isObject = function (source) {
        return 'function' === typeof source || !!(source && 'object' === typeof source);
    };

    //锟斤拷锟斤拷模锟斤拷锟街凤拷锟斤拷
    bt._analysisStr = function(str){

        //取锟矫分革拷锟斤拷
        var _left_ = bt.LEFT_DELIMITER;
        var _right_ = bt.RIGHT_DELIMITER;

        //锟皆分革拷锟斤拷锟斤拷锟斤拷转锟藉，支锟斤拷锟斤拷锟斤拷锟叫碉拷元锟街凤拷锟斤拷锟斤拷锟斤拷锟斤拷HTML注锟斤拷 <!  !>
        var _left = bt._encodeReg(_left_);
        var _right = bt._encodeReg(_right_);

        str = String(str)

            //去锟斤拷锟街革拷锟斤拷锟斤拷js注锟斤拷
            .replace(new RegExp("("+_left+"[^"+_right+"]*)//.*\n","g"), "$1")

            //去锟斤拷注锟斤拷锟斤拷锟斤拷  <%* 锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷注锟斤拷 *%>
            //默锟斤拷支锟斤拷HTML注锟酵ｏ拷锟斤拷HTML注锟斤拷匹锟斤拷锟斤拷锟斤拷原锟斤拷锟斤拷锟矫伙拷锟叫匡拷锟斤拷锟斤拷 <! !>锟斤拷锟斤拷锟街革拷锟斤拷
            .replace(new RegExp("<!--.*?-->", "g"),"")
            .replace(new RegExp(_left+"\\*.*?\\*"+_right, "g"),"")

            //锟斤拷锟斤拷锟叫伙拷锟斤拷去锟斤拷  \r锟截筹拷锟斤拷 \t锟狡憋拷锟斤拷 \n锟斤拷锟叫凤拷
            .replace(new RegExp("[\\r\\t\\n]","g"), "")

            //锟斤拷锟斤拷锟斤拷锟斤拷锟角分革拷锟斤拷锟节诧拷锟斤拷锟斤拷锟斤拷锟叫猴拷锟斤拷 斜锟斤拷 \ 锟斤拷锟斤拷锟斤拷 锟斤拷 锟斤拷锟斤拷锟斤拷锟届法为HTML转锟斤拷
            .replace(new RegExp(_left+"(?:(?!"+_right+")[\\s\\S])*"+_right+"|((?:(?!"+_left+")[\\s\\S])+)","g"),function (item, $1) {
                var str = '';
                if($1){

                    //锟斤拷 斜锟斤拷 锟斤拷锟斤拷 HTML转锟斤拷
                    str = $1.replace(/\\/g,"&#92;").replace(/'/g,'&#39;');
                    while(/<[^<]*?&#39;[^<]*?>/g.test(str)){

                        //锟斤拷锟斤拷签锟节的碉拷锟斤拷锟斤拷转锟斤拷为\r  锟斤拷锟斤拷锟斤拷锟斤拷一锟斤拷锟斤拷锟芥换为\'
                        str = str.replace(/(<[^<]*?)&#39;([^<]*?>)/g,'$1\r$2')
                    };
                }else{
                    str = item;
                }
                return str ;
            });


        str = str
            //锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷没锟叫分号ｏ拷锟斤拷要锟捷达拷  <%var val='test'%>
            .replace(new RegExp("("+_left+"[\\s]*?var[\\s]*?.*?[\\s]*?[^;])[\\s]*?"+_right,"g"),"$1;"+_right_)

            //锟皆憋拷锟斤拷锟斤拷锟斤拷锟侥分猴拷锟斤拷锟捷达拷(锟斤拷锟斤拷转锟斤拷模式 锟斤拷<%:h=value%>)  <%=value;%> 锟脚筹拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷 <%fun1();%> 锟脚筹拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷  <%var val='test';%>
            .replace(new RegExp("("+_left+":?[hvu]?[\\s]*?=[\\s]*?[^;|"+_right+"]*?);[\\s]*?"+_right,"g"),"$1"+_right_)

            //锟斤拷锟斤拷 <% 锟街革拷为一锟斤拷锟斤拷锟斤拷锟介，锟斤拷锟斤拷 \t 锟斤拷锟斤拷一锟斤拷锟斤拷锟洁当锟节斤拷 <% 锟芥换为 \t
            //锟斤拷模锟藉按锟斤拷<%锟斤拷为一锟斤拷一锟轿的ｏ拷锟斤拷锟斤拷每锟轿的斤拷尾锟斤拷锟斤拷 \t,锟斤拷锟斤拷 \t 锟斤拷每锟斤拷模锟斤拷片锟斤拷前锟斤拷锟街革拷锟斤拷
            .split(_left_).join("\t");

        //支锟斤拷锟矫伙拷锟斤拷锟斤拷默锟斤拷锟角凤拷锟皆讹拷转锟斤拷
        if(bt.ESCAPE){
            str = str

                //锟揭碉拷 \t=锟斤拷锟斤拷一锟斤拷锟街凤拷%> 锟芥换为 锟斤拷锟斤拷锟斤拷锟斤拷锟街凤拷,'
                //锟斤拷锟芥换锟津单憋拷锟斤拷  \t=data%> 锟芥换为 ',data,'
                //默锟斤拷HTML转锟斤拷  也支锟斤拷HTML转锟斤拷写锟斤拷<%:h=value%>
                .replace(new RegExp("\\t=(.*?)"+_right,"g"),"',typeof($1) === 'undefined'?'':baidu.template._encodeHTML($1),'");
        }else{
            str = str

                //默锟较诧拷转锟斤拷HTML转锟斤拷
                .replace(new RegExp("\\t=(.*?)"+_right,"g"),"',typeof($1) === 'undefined'?'':$1,'");
        };

        str = str

            //支锟斤拷HTML转锟斤拷写锟斤拷<%:h=value%>
            .replace(new RegExp("\\t:h=(.*?)"+_right,"g"),"',typeof($1) === 'undefined'?'':baidu.template._encodeHTML($1),'")

            //支锟街诧拷转锟斤拷写锟斤拷 <%:=value%>锟斤拷<%-value%>
            .replace(new RegExp("\\t(?::=|-)(.*?)"+_right,"g"),"',typeof($1)==='undefined'?'':$1,'")

            //支锟斤拷url转锟斤拷 <%:u=value%>
            .replace(new RegExp("\\t:u=(.*?)"+_right,"g"),"',typeof($1)==='undefined'?'':encodeURIComponent($1),'")

            .replace(new RegExp("\\t:v=(.*?)"+_right,"g"),"',typeof($1)==='undefined'?'':baidu.template._encodeEventHTML($1),'")

            .split("\t").join("');")

            .split(_right_).join("_template_fun_array.push('")

            //锟斤拷 \r 锟芥换为 \
            .split("\r").join("\\'");

        return str;
    };

})(window);