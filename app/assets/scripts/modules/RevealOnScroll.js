import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll{
  constructor(itemToReveal, customOffset){
    this.itemsToReveal  = itemToReveal;    
    this.offset = customOffset;
    this.hideInitially();
    this.createWayPoints();
  }
  
  hideInitially(){
    this.itemsToReveal.addClass("reveal-item");
  }
  
  createWayPoints(){
    var self = this;
    this.itemsToReveal.each(function(){
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function(){
          $(currentItem).addClass("reveal-item--is-visible");
        },
        offset: self.offset
      });
    })
  }

}

export default RevealOnScroll;