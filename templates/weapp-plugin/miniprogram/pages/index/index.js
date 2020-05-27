const plugin = requirePlugin('hello');
Page({
  data: {
    items: [],
    currentItem: 0,
  },
  onLoad: function () {
    console.log('是否支持 Observers', plugin.isSupportObservers());
  },
  addItem: function () {
    this.data.items.push(this.data.currentItem++);
    this.setData({
      items: this.data.items,
      currentItem: this.data.currentItem,
    });
  },
});
