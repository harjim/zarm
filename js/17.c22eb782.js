(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{369:function(n,r,o){"use strict";o.r(r),o.d(r,"default",function(){return h});var t=o(7),e=o.n(t),a=o(8),i=o.n(a),u=o(9),d=o.n(u),c=o(27),l=o.n(c),s=o(10),f=o.n(s),m=o(48),g=o.n(m),h=function(n){function r(){var n,t;e()(this,r);for(var a=arguments.length,u=new Array(a),c=0;c<a;c++)u[c]=arguments[c];return t=i()(this,(n=d()(r)).call.apply(n,[this].concat(u))),g()(l()(t),"document",function(){return{document:o(638),className:"icon-page"}}),t}return f()(r,n),r}(o(610).a)},610:function(n,r,o){"use strict";o.d(r,"a",function(){return y});var t=o(7),e=o.n(t),a=o(11),i=o.n(a),u=o(8),d=o.n(u),c=o(9),l=o.n(c),s=o(10),f=o.n(s),m=o(0),g=o.n(m),h=o(613),p=o.n(h),w=o(614),v=o.n(w),y=(o(615),o(611),function(n){function r(){return e()(this,r),d()(this,l()(r).apply(this,arguments))}return f()(r,n),i()(r,[{key:"render",value:function(){var n=this.document(localStorage.getItem("LANGUAGE")||"zh-CN"),r=n.document,o=n.className;if("string"==typeof r){var t=new p.a.Renderer;t.table=function(n,r){return'<div class="grid-container"><table class="grid"><thead>'.concat(n,"</thead><tbody>").concat(r,"</tbody></table></div>")},t.code=function(n,r){var o=!(!r||!v.a.getLanguage(r))?v.a.highlight(r,n).value:n;return'<pre><code class="hljs '.concat(r,'">').concat(o,"</code></pre>")};var e=p()(r,{renderer:t});return g.a.createElement("div",{className:o,dangerouslySetInnerHTML:{__html:e}})}return g.a.createElement("span",null)}}]),r}(m.Component))},611:function(n,r,o){},638:function(n,r){n.exports="# 图标 Icon\n\n\n\n## 基本用法\n```jsx\nimport { Icon } from 'zarm';\n\nconst ICONS = [\n  'right', 'right-round', 'right-round-fill',\n  'wrong', 'wrong-round', 'wrong-round-fill',\n  'info-round', 'info-round-fill',\n  'question-round', 'question-round-fill',\n  'warning-round', 'warning-round-fill',\n  'arrow-left', 'arrow-right', 'arrow-top', 'arrow-bottom',\n  'add', 'add-round', 'add-round-fill',\n  'minus', 'minus-round', 'minus-round-fill',\n  'broadcast', 'search',\n];\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div className=\"grid\">\n        {\n          ICONS.sort().map((icon, i) => {\n            return (\n              <div className=\"grid-column\" key={+i}>\n                <Icon className=\"icon\" theme=\"primary\" type={icon} />\n                <span className=\"icon-name\">{icon}</span>\n              </div>\n            );\n          })\n        }\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| theme | string | 'default' | 主题，可选值 `default`、`primary`、`success`、`warning`、`danger` |\n| type | string | - | 图标类型，可选值 `right`、`right-round`、`right-round-fill`,`wrong`、`wrong-round`、`wrong-round-fill`、`info-round`、`info-round-fill`、`question-round`、`question-round-fill`、`warning-round`、`warning-round-fill`、`arrow-left`、`arrow-right`、`arrow-top`、`arrow-bottom`、`add`、`add-round`、`add-round-fill`、`minus`、`minus-round`、`minus-round-fill`、`broadcast` |\n"}}]);