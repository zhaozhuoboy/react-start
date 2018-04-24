import Loadable from 'react-loadable';

/**
 * 首屏之外的页面使用react-loadable进行懒加载
 * 输出时会进行代码分割
 * loading方法可以返回DOM节点，比如：Loading组件
 */
export const About = Loadable({
    loader: () => import('page/About'),
    loading() {
        return ''
    },
})