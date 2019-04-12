(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{367:function(n,e,t){"use strict";t.r(e),t.d(e,"default",function(){return g});var a=t(7),i=t.n(a),l=t(8),s=t.n(l),o=t(9),r=t.n(o),c=t(27),u=t.n(c),d=t(10),v=t.n(d),m=t(48),h=t.n(m),g=function(n){function e(){var n,a;i()(this,e);for(var l=arguments.length,o=new Array(l),c=0;c<l;c++)o[c]=arguments[c];return a=s()(this,(n=r()(e)).call.apply(n,[this].concat(o))),h()(u()(a),"document",function(){return{document:t(636),className:"datepicker-page"}}),a}return v()(e,n),e}(t(610).a)},610:function(n,e,t){"use strict";t.d(e,"a",function(){return k});var a=t(7),i=t.n(a),l=t(11),s=t.n(l),o=t(8),r=t.n(o),c=t(9),u=t.n(c),d=t(10),v=t.n(d),m=t(0),h=t.n(m),g=t(613),f=t.n(g),D=t(614),b=t.n(D),k=(t(615),t(611),function(n){function e(){return i()(this,e),r()(this,u()(e).apply(this,arguments))}return v()(e,n),s()(e,[{key:"render",value:function(){var n=this.document(localStorage.getItem("LANGUAGE")||"zh-CN"),e=n.document,t=n.className;if("string"==typeof e){var a=new f.a.Renderer;a.table=function(n,e){return'<div class="grid-container"><table class="grid"><thead>'.concat(n,"</thead><tbody>").concat(e,"</tbody></table></div>")},a.code=function(n,e){var t=!(!e||!b.a.getLanguage(e))?b.a.highlight(e,n).value:n;return'<pre><code class="hljs '.concat(e,'">').concat(t,"</code></pre>")};var i=f()(e,{renderer:a});return h.a.createElement("div",{className:t,dangerouslySetInnerHTML:{__html:i}})}return h.a.createElement("span",null)}}]),e}(m.Component))},611:function(n,e,t){},636:function(n,e){n.exports="# 日期选择器 DatePicker\n\n\n\n## 基本用法\n```jsx\nimport { Cell, Button, DatePicker, Toast } from 'zarm';\n\nclass Demo extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      date: {\n        visible: false,\n        value: '',\n      },\n      time: {\n        visible: false,\n        value: '',\n      },\n      limitDate: {\n        visible: false,\n        value: '2017-09-13',\n      },\n    };\n  }\n\n  toggle(key) {\n    const state = this.state[key];\n    state.visible = !state.visible;\n    this.setState({ [`${key}`]: state });\n  }\n\n  render() {\n    const {\n      date,\n      time,\n      limitDate,\n    } = this.state;\n\n    return (\n      <div>\n        <Cell\n          description={\n            <Button size=\"xs\" onClick={() => this.toggle('date')}>选择</Button>\n          }\n        >\n          选择日期\n        </Cell>\n\n        <Cell\n          description={\n            <Button size=\"xs\" onClick={() => this.toggle('time')}>选择</Button>\n          }\n        >\n          选择时间\n        </Cell>\n\n        <Cell\n          description={\n            <Button size=\"xs\" onClick={() => this.toggle('limitDate')}>选择</Button>\n          }\n        >\n          选择日期(自定义)\n        </Cell>\n\n        <DatePicker\n          visible={date.visible}\n          mode=\"date\"\n          value={date.value}\n          onOk={(value) => {\n            this.setState({\n              date: {\n                visible: false,\n                value,\n              },\n            });\n            Toast.show(JSON.stringify(value));\n          }}\n          onCancel={() => this.toggle('date')}\n        />\n\n        <DatePicker\n          visible={time.visible}\n          mode=\"time\"\n          value={time.value}\n          onOk={(value) => {\n            this.setState({\n              time: {\n                visible: false,\n                value,\n              },\n            });\n            Toast.show(JSON.stringify(value));\n          }}\n          onCancel={() => this.toggle('time')}\n        />\n\n        <DatePicker\n          visible={limitDate.visible}\n          title=\"选择日期\"\n          okText=\"确定\"\n          cancelText=\"取消\"\n          mode=\"date\"\n          min=\"2007-01-03\"\n          max=\"2019-11-23\"\n          value={limitDate.value}\n          onOk={(value) => {\n            this.setState({\n              limitDate: {\n                visible: false,\n                value,\n              },\n            });\n            Toast.show(JSON.stringify(value));\n          }}\n          onCancel={() => this.toggle('limitDate')}\n        />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n## 表单选择 DateSelect\n```jsx\nimport { Cell, DateSelect } from 'zarm';\n\nclass Demo extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      visible: false,\n      value: '',\n    };\n  }\n\n  render() {\n    const { visible } = this.state;\n    return (\n      <div>\n        <Cell hasArrow title=\"日期选择\">\n          <DateSelect\n            title=\"选择日期\"\n            placeholder=\"请选择日期\"\n            mode=\"date\"\n            value={this.state.value}\n            visible={visible}\n            onOk={(value) => {\n              console.log('DateSelect onOk: ', value);\n              this.setState({\n                visible: false,\n                value,\n              });\n            }}\n            onMaskClick={() => {\n              this.setState({\n                visible: false,\n              });\n            }}\n          />\n        </Cell>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 平铺选择 DatePickerView\n```jsx\nimport { DatePickerView } from 'zarm';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <DatePickerView\n          mode=\"datetime\"\n          min=\"2018-1-13\"\n          onChange={(value) => {\n            console.log('datePickerView => ', value);\n          }}\n        />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| value | string \\| Date | - | 值 |\n| defaultValue | string \\| Date | - | 初始值 |\n| mode | string | 'date' | 指定日期选择模式，可选项 `year`, `month`, `date`, `time`, `datetime` |\n| min | string | - | 相应mode的最小时间 |\n| max | string | - | 相应mode的最大时间 |\n| minuteStep | number | 1 | 分钟间隔 |\n| disabled | boolean | false | 是否禁用 |\n| onChange | (value?: Date) => void | - | 值变化时触发的回调函数 |\n\n### 仅 DatePicker & DateSelect 支持的属性\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| visible | boolean | false | 是否展示 |\n| title | string | '请选择' | 选择器标题 |\n| cancelText | string | '取消' | 取消栏文字 |\n| okText | string | '确定' | 确定栏文字 |\n| onOk | (value?: Date) => void | - | 点击确定时触发的回调函数 | \n| onCancel | () => void | - | 点击取消时触发的回调函数 |\n| onMaskClick | () => void | - | 点击遮罩层时触发的回调函数 |\n| wheelDefaultValue | string \\| Date | - | 滚轮默认停留的日期位置 |\n\n### 仅 DateSelect 支持的属性\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| placeholder | string | '请选择' | 输入提示信息 |\n| format | string | - | 格式化显示值。例：format=\"yyyy年MM月dd日\"<br /> 年:`yyyy`, 月:`MM`, 日:`dd`, 时:`hh`, 分:`mm`。 |\n"}}]);