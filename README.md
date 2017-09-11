# 这是一个angular的练手项目

# 感谢
参考[大漠穷秋的开源项目](https://damoqiongqiu.github.io/)，本项目只是作为个人的一个practice。

# 解决&没解决的问题
多数基础问题都会再此处有个很好的答案。同时也是自己玩的时候遇到的，如果有帮助**希望能在右上角点个star**
1. npm build --prod(primeng报错)
[Type 'string' is not assignable to type 'boolean'](https://github.com/primefaces/primeng/issues/3781)
> try to use 4.1.3

2. 如何引入样式文件or字体文件
````styles.scss
@import "~bootstrap/dist/css/bootstrap.min.css";
@import "~font-awesome/css/font-awesome.min.css";
````
> [为何使用~导入node_modules](https://doc.webpack-china.org/loaders/sass-loader)

3. angular-cli如何导入外部css资源(建议不用cnpm安装)
````
"styles": [
    "styles.scss",
    "../node_modules/font-awesome/css/font-awesome.min.css",
    "../node_modules/primeng/resources/primeng.min.css",
    "../node_modules/primeng/resources/themes/omega/theme.css",
]
````

4. RangeError: Maximum call stack size exceeded
> module中是否缺少import route

5. Template parse errors:
````
'p-tabPanel' is not a known element:
1. If 'p-tabPanel' is an Angular component, then verify that it is part of this module.
2. If 'p-tabPanel' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.
````
6. Error: Type TestTemplateComponent is part of the declarations of 2 modules: AppModule and TestComponentModule! Please consider moving TestTemplateComponent to a higher module that imports AppModule and TestComponentModule
> 重复导入组件

7. Can't bind to 'routerLink' since it isn't a known property of 'a'. ("
> 需导入 RouterModule

8. Can't bind to 'ngModel' since it isn't a known property of 'input'

9. Cannot assign to a reference or variable!
> 在form中模板引用变量别和ngModule一样
[https://github.com/angular/angular/issues/9363](https://github.com/angular/angular/issues/9363)
[https://github.com/oferh/ng2-completer/issues/63](https://github.com/oferh/ng2-completer/issues/63)

10. No provider for NgControl
> 导入ReactiveFormsModule
# 学习链接
[font-awesome](http://fontawesome.io/icons/)

[bootstrap](http://v3.bootcss.com/css/)

[angular-cli](https://github.com/angular/angular-cli/wiki)

[这是最好的angular官方文档](https://angular.cn/docs)

[anuglar-UI primeng](https://www.primefaces.org/primeng/#/setup)
[anuglar-UI material2](https://github.com/angular/material2)
[anuglar-UI bootstrap](http://valor-software.com/ngx-bootstrap/#/)