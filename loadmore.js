var spillDataNum = 120;
// 设置默认溢出显示数量 比如当前显示 5 条    spillDataNum的值就是还有120条还没显示
// 设置隐藏函数
var timeout = false;
let setRowDisableNone = function (topNum, showRowNum, binding) {
  if (timeout) {
    clearTimeout(timeout);
  }
  timeout = setTimeout(() => {
    console.log('event argument----->')
    console.log(topNum, topNum + showRowNum + spillDataNum)
    //topNum是开始下标, topNum + showRowNum + spillDataNum  是结束下标
    binding.value.call(null, topNum, topNum + showRowNum + spillDataNum);
  });
};
export default {
  name: 'loadmore',
  componentUpdated: function (el, binding, vnode, oldVnode) {
    setTimeout(() => {
      const dataSize = vnode.data.attrs['data-size'];
      const oldDataSize = oldVnode.data.attrs['data-size'];
      console.error('size------------->')
      console.log(dataSize,oldDataSize)
      if(dataSize === oldDataSize){
        return;
      }
      const selectWrap = el.querySelector('.el-table__body-wrapper');
      const selectTbody = selectWrap.querySelector('table tbody');
      const selectRow = selectWrap.querySelector('table tr');
      if (!selectRow) {
        return;
      }
      const rowHeight = selectRow.clientHeight;
      let showRowNum = Math.round(selectWrap.clientHeight / rowHeight);
      console.error('showRowNum------------->')
      console.log(selectWrap.clientHeight,showRowNum)
      const createElementTR = document.createElement('tr');
      let createElementTRHeight = (dataSize - showRowNum - spillDataNum) * rowHeight;
      createElementTR.setAttribute('style', `height: ${createElementTRHeight}px;`);
      selectTbody.append(createElementTR);
 
      // 监听滚动后事件
      selectWrap.addEventListener('scroll', function () {
        //滚动当前距离大于spillDataNum 数量的时候高度topPx  从而得出topNum 数量的个数
        let topPx = this.scrollTop - spillDataNum * rowHeight;
        let topNum = Math.round(topPx / rowHeight);
        let minTopNum = dataSize - spillDataNum - showRowNum;
        //最后的高度不会大于展示的数据加溢出的数据高度  
        if (topNum > minTopNum) {
          topNum = minTopNum;
        }
        if (topNum < 0) {
          topNum = 0;
          topPx = 0;
        }
        selectTbody.setAttribute('style', `transform: translateY(${topPx}px)`);
        //初始化的高度是createElementTRHeight 滚动之后需要减去滚动的高度
        createElementTR.setAttribute('style', `height: ${createElementTRHeight-topPx > 0 ? createElementTRHeight-topPx : 0}px;`);
        setRowDisableNone(topNum, showRowNum, binding);
      })
    });
  }
};