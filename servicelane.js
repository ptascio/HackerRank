// Calvin is driving his favorite vehicle on the 101 freeway. He notices that the check engine light of his vehicle is on, and he wants to service it immediately to avoid any risks. Luckily, a service lane runs parallel to the highway. The length of the service lane is  units. The service lane consists of  segments of equal length and different width.
//
// Calvin can enter to and exit from any segment. Let's call the entry segment as index  and the exit segment as index . Assume that the exit segment lies after the entry segment () and . Calvin has to pass through all segments from index  to index  (both inclusive).
//
// Calvin has three types of vehicles - bike, car, and truck - represented by ,  and , respectively. These numbers also denote the width of the vehicle.
//
// You are given an array  of length , where  represents the width of the th segment of the service lane. It is guaranteed that while servicing he can pass through at most  segments, including the entry and exit segments.
//
// If , only the bike can pass through the th segment.
// If , the bike and the car can pass through the th segment.
// If , all three vehicles can pass through the th segment.
// Given the entry and exit point of Calvin's vehicle in the service lane, output the type of the largest vehicle which can pass through the service lane (including the entry and exit segments).
//
// Input Format
//
// The first line of input contains two integers,  and , where  denotes the length of the freeway and  the number of test cases. The next line has  space-separated integers which represent the  array.
//
//  test cases follow. Each test case contains two integers,  and , where  is the index of the segment through which Calvin enters the service lane and  is the index of the lane segment through which he exits.
//
//  (0, 3): Because width[2] = 1, only the bike can pass through it.
// (4, 6): Here the largest allowed vehicle which can pass through the 5th segment is the car and for the 4th and 6th segment it's the truck. Hence the largest vehicle allowed in these segments is a car.
// (6, 7): In this example, the vehicle enters at the 6th segment and exits at the 7th segment. Both segments allow even trucks to pass through them. Hence the answer is 3.
// (3, 5): width[3] = width[5] = 2. While the 4th segment allows the truck, the 3rd and 5th allow up to a car. So 2 will be the answer here.
// (0, 7): The bike is the only vehicle which can pass through the 2nd segment, which limits the strength of the whole lane to 1.
// Sample Input
//
// 8 5
// 2 3 1 2 3 2 3 3
// 0 3
// 4 6
// 6 7
// 3 5
// 0 7


function main(width, n, t) {
    width = width.map(Number);
    var response = [];
    for(var a0 = 0; a0 < t; a0++){
        var i_temp = readLine().split(' ');
        var i = parseInt(i_temp[0]);
        var j = parseInt(i_temp[1]);
        var newArr = [];
        for(let x = i; x <= j; x++){
            newArr.push(width[x]);
        }
        if (newArr.includes(1)){
            console.log(1);
        }else if (newArr.includes(2)){
            console.log(2);
        }else {
            console.log(3);
        }
    }

}
