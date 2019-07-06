/**
 * @Author: wangdaohan
 * @Date:   2018-01-15T15:54:07+08:00
 * @Email:  wangdaohan@didichuxing.com
 * @Filename: kekse.js
 * @Last modified by:   wangdaohan
 * @Last modified time: 2018-03-30T21:47:08+08:00
 */
import KekseForm from './lib/form'
import KekseTable from './lib/table'
import KekseInfo from './lib/info'
import KekseMultiForm from './lib/multi-form'
import KekseBoard from './lib/board'

const kekse = {}
kekse.install = function (Vue) {
  Vue.mixin({
    components: {
      KekseForm,
      KekseTable,
      KekseInfo,
      KekseMultiForm,
      KekseBoard,
    },
  })
}

export default kekse
