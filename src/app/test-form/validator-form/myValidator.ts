// 自定义校验器
import { ValidatorFn, AbstractControl } from "@angular/forms";

// 验证器Factory
export function myValidator(nameRe: RegExp): ValidatorFn {
  // 返回一个control
  return (control: AbstractControl): { [key: string]: any } => {
    const regResult = nameRe.test(control.value);
    console.log("正则：" + nameRe);
    console.log("control值：" + control.value);
    console.log('验证结果：' + regResult);
    return regResult ? { 'my': { value: '正则表达式不通过' } } : null;
  };
}
