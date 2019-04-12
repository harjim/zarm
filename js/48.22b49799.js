(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{580:function(n,e,t){"use strict";t.r(e),t.d(e,"default",function(){return b});var a=t(7),o=t.n(a),r=t(8),s=t.n(r),i=t(9),m=t.n(i),c=t(27),l=t.n(c),u=t(10),d=t.n(u),h=t(48),g=t.n(h),p=t(616),b=(t(908),function(n){function e(){var n,a;o()(this,e);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return a=s()(this,(n=m()(e)).call.apply(n,[this].concat(i))),g()(l()(a),"document",function(){return{document:t(632),className:"carousel-page"}}),a}return d()(e,n),e}(p.a))},632:function(n,e){n.exports="# 走马灯 Carousel\n\n\n\n## 基本用法\n```jsx\nimport { Carousel } from 'zarm';\n\nconst ITEMS = [\n  'https://static.zhongan.com/website/health/zarm/images/banners/1.png',\n  'https://static.zhongan.com/website/health/zarm/images/banners/2.png',\n  'https://static.zhongan.com/website/health/zarm/images/banners/3.png',\n];\n\nfunction contentRender() {\n  return ITEMS.map((item, i) => {\n    return (\n      <div className=\"carousel__item__pic\" key={+i}>\n        <img src={item} alt=\"\" draggable={false} />\n      </div>\n    );\n  });\n}\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Carousel\n          onChange={(index) => {\n            console.log(`onChange: ${index}`);\n          }}\n        >\n          {contentRender()}\n        </Carousel>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 纵向\n```jsx\nimport { Carousel } from 'zarm';\n\nconst ITEMS = [\n  'https://static.zhongan.com/website/health/zarm/images/banners/1.png',\n  'https://static.zhongan.com/website/health/zarm/images/banners/2.png',\n  'https://static.zhongan.com/website/health/zarm/images/banners/3.png',\n];\n\nfunction contentRender() {\n  return ITEMS.map((item, i) => {\n    return (\n      <div className=\"carousel__item__pic\" key={+i}>\n        <img src={item} alt=\"\" draggable={false} />\n      </div>\n    );\n  });\n}\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Carousel\n          direction=\"up\"\n          height=\"48vw\"\n        >\n          {contentRender()}\n        </Carousel>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 循环轮播\n```jsx\nimport { Carousel, Button } from 'zarm';\n\nconst ITEMS = [\n  'https://static.zhongan.com/website/health/zarm/images/banners/1.png',\n  'https://static.zhongan.com/website/health/zarm/images/banners/2.png',\n  'https://static.zhongan.com/website/health/zarm/images/banners/3.png',\n];\n\nfunction contentRender() {\n  return ITEMS.map((item, i) => {\n    return (\n      <div className=\"carousel__item__pic\" key={+i}>\n        <img src={item} alt=\"\" draggable={false} />\n      </div>\n    );\n  });\n}\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Carousel\n          ref={(ele) => { this.carousel = ele; }}\n          loop\n          direction=\"left\"\n          onChange={(index) => {\n            console.log(`onChange: ${index}`);\n          }}\n        >\n          {contentRender()}\n        </Carousel>\n        <div className=\"controls\">\n          <Button\n            block\n            size=\"sm\"\n            onClick={() => {\n              this.carousel.onJumpTo(0);\n            }}\n          >\n            无动画切换指定页\n          </Button>\n\n          <Button\n            block\n            size=\"sm\"\n            onClick={() => {\n              this.carousel.onSlideTo(2);\n            }}\n          >\n            滑动到指定页\n          </Button>\n        </div>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 自动循环轮播\n```jsx\nimport { Carousel } from 'zarm';\n\nconst ITEMS = [\n  'https://static.zhongan.com/website/health/zarm/images/banners/1.png',\n  'https://static.zhongan.com/website/health/zarm/images/banners/2.png',\n  'https://static.zhongan.com/website/health/zarm/images/banners/3.png',\n];\n\nfunction contentRender() {\n  return ITEMS.map((item, i) => {\n    return (\n      <div className=\"carousel__item__pic\" key={+i}>\n        <img src={item} alt=\"\" draggable={false} />\n      </div>\n    );\n  });\n}\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Carousel\n          autoPlay\n          loop\n          direction=\"left\"\n          onChangeEnd={(index) => {\n            console.log(`onChangeEnd: ${index}`);\n          }}\n        >\n          {contentRender()}\n        </Carousel>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| direction | string | 'left' | 滑动方向，可选值 `left`、`right`、`up`、`down` |\n| height | number \\| string | 160 | 设置轮播区域高度 |\n| activeIndex | number | 0 | 当前页面的索引 |\n| loop | boolean | false | 是否循环 |\n| autoPlay | boolean | false | 是否自动轮播 |\n| autoPlayIntervalTime | number | 3000 | 自动轮播时间间隔，单位：毫秒 |\n| moveDistanceRatio | number | 0.5 | 移动距离比例临界点 |\n| moveTimeSpan | number | 300 | 移动时间跨度临界点，单位：毫秒 |\n| animationDuration | number | 300 | 动画执行时间，单位：毫秒 |\n| showPagination | boolean | true | 是否显示分页器 |\n| onChange | (activeIndex?: number) => void | - | 值变化时触发的回调函数 |\n| onChangeEnd | (activeIndex?: number) => void | - | 值变化动画结束后触发的回调函数 |\n"},908:function(n,e,t){}}]);