/**
 *  * @param {number} capacity
 *   */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.availCapcaity = capacity;
  this.entity = {};
};

/** 
 *  * @param {number} key
 *   * @return {number}
 *    */
LRUCache.prototype.get = function(key) {
};

/** 
 *  * @param {number} key 
 *   * @param {number} value
 *    * @return {void}
 *     */
LRUCache.prototype.put = function(key, value) {
};

/** 
 *  * Your LRUCache object will be instantiated and called as such:
 *   * var obj = Object.create(LRUCache).createNew(capacity)
 *    * var param_1 = obj.get(key)
 *     * obj.put(key,value)
 *      */
