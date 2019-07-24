const { addTwoNumbers, ListNode } = require('./add-two-numbers')

var l1 = new ListNode(1)
l1.next = new ListNode(2)
l1.next.next = new ListNode(3)

var l2 = new ListNode(1)
l2.next = new ListNode(2)
l2.next.next = new ListNode(3)

console.log(addTwoNumbers(l1, l2))
