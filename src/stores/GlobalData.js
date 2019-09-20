import { observable } from 'mobx'

class GlobalData {
  @observable title = "我是一个标题"
}

export default GlobalData;