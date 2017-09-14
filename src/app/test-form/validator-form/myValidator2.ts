import { Validator, NG_VALIDATORS, AbstractControl } from "@angular/forms";
import { Directive, Input } from "@angular/core";
import { myValidator } from "./myValidator";

@Directive({
    selector: '[appMy2]',
    providers: [{ provide: NG_VALIDATORS, useExisting: My2ValidatorDirective, multi: true }]
})
// 1. 实现验证器
// 2. 提供providers
// 自定义验证器指令是用useExisting而不是useClass来实例化的。
// 注册的验证器必须是这个 ForbiddenValidatorDirective 实例本身，也就是表单中 forbiddenName 属性被绑定到了"bob"的那个。
// 如果用useClass来代替useExisting，就会注册一个新的类实例，而它是没有forbiddenName的
export class My2ValidatorDirective implements Validator {
    @Input() appMy2: string;

    // 发现此方法执行2次首次加载时，大致猜测：
    // 1. 初始化指令，this.appMy2的input为null
    // 2. 由于ngModule的双向绑定，触发了组件，调用该指令，由于username未定义，所以undefined
    validate(control: AbstractControl): { [key: string]: any } {
        console.log('验证指令，input：' + this.appMy2);
        return this.appMy2 ? myValidator(new RegExp(this.appMy2, 'i'))(control)
            : null;
    }
}