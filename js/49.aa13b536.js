(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{581:function(n,e,t){"use strict";t.r(e),t.d(e,"default",function(){return g});var o=t(7),i=t.n(o),r=t(8),l=t.n(r),c=t(9),s=t.n(c),a=t(27),d=t.n(a),m=t(10),p=t.n(m),C=t(48),h=t.n(C),u=t(616),g=(t(910),function(n){function e(){var n,o;i()(this,e);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return o=l()(this,(n=s()(e)).call.apply(n,[this].concat(c))),h()(d()(o),"document",function(){return{document:t(633),className:"cell-page"}}),o}return p()(e,n),e}(u.a))},633:function(n,e){n.exports='# 列表项 Cell\n\n\n\n## 基本用法\n```jsx\nimport { Cell } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Cell title="标题文字" />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 带描述\n```jsx\nimport { Cell, Icon } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Cell title="标题文字" description="描述文字" />\n        <Cell title="标题文字" description={<Icon type="right" />} />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 带图标、标题\n```jsx\nimport { Cell, Icon } from \'zarm\';\n\nconst img = \'https://static.zhongan.com/website/health/zarm/images/icons/state.png\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Cell title="标题文字" icon={<Icon type="right" />} />\n        <Cell title="标题文字" icon={<img alt="" src={img} style={{ width: 24, height: 24 }} />} />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 带跳转\n```jsx\nimport { Cell } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Cell title="标题文字" onClick={() => {}} />\n        <Cell title="标题文字" onClick={() => {}} />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 带描述、箭头、跳转\n```jsx\nimport { Cell } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Cell hasArrow title="标题文字" description="描述文字" onClick={() => {}} />\n        <Cell hasArrow title="标题文字" description="描述文字" onClick={() => {}} />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 带图标、描述、箭头、跳转\n```jsx\nimport { Cell, Icon } from \'zarm\';\n\nconst img = \'https://static.zhongan.com/website/health/zarm/images/icons/state.png\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Cell\n          hasArrow\n          title="标题文字"\n          description="描述文字"\n          icon={<Icon type="right" />}\n          onClick={() => {}}\n        />\n\n        <Cell \n          hasArrow\n          title="标题文字"\n          description="描述文字"\n          icon={\n            <img alt="" src={img} style={{ width: \'24px\', height: \'24px\' }} />\n          }\n          onClick={() => {}}\n        />\n\n        <Cell\n          hasArrow\n          title={\n            <div className="box">\n              <div className="box-title">标题文字</div>\n              <div className="box-description">描述文字</div>\n            </div>\n          }\n          description="附加提示"\n          icon={<img alt="" src={img} style={{ width: \'48px\', height: \'48px\' }} />}\n          onClick={() => {}}\n        />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 提示信息\n```jsx\nimport { Cell, Message, Icon, Input } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Cell\n          title="标题"\n          help={<Message theme="danger" icon={<Icon type="info-round" />}>标题不能为空</Message>}\n        >\n          <Input type="text" placeholder="请输入标题" />\n        </Cell>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| hasArrow | boolean | false | 是否显示箭头 |\n| icon | ReactNode | - | 设置图标 |\n| titile | ReactNode | - | 设置标题区域内容 |\n| description | ReactNode | - | 设置描述区域内容 |\n| help | ReactNode | - | 设置下方提示信息区域内容，通常配合 `Message` 组件使用 |\n| onClick | () => void | - | 点击后触发的回调函数 |\n'},910:function(n,e,t){}}]);