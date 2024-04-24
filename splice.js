const friend = [45, 86, 45, 22, 43, 75, 12, 55, 63, 92];
const partial = friend.splice(2, 5, 1, 2, 3); /* অরজিনাল এ্যারে থেকে কিছু এলিমেন্ট কে সরানোর জন্য। */
console.log(partial)
console.log(friend)