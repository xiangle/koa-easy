# 一个超简单的koa洋葱圈模型

洋葱圈的执行过程是由外向内传递，通过next方法向内依次递进，否则内层不会执行。中心是controller层，当抵达核心后next的工作就结束了
 
 
如果将代码展开来看，其实就是层层嵌套的效果
 
 ```
 {
     before
     {
         before
         {
             before
             {
                 before
                 {
                     controller
                 }
                 after
             }
             after
         }
         after
     }
     after
 }
 ```

## 输出示例
 
完整穿透
 ```
{1{2{3{4{5{6}5}4}3}2}1}
 ```
部分穿透
 ```
{1{2{3}2}1}
 ```
 
 
## 特性
* ctx等同于this
* 支持箭头函数
