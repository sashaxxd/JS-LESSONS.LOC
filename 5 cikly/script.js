//Цикл while
var i = 10;
while (i < 14){
    alert(i);
    i++;
}
//Цикл do while
var i2 = 10
do {
    alert(i2);
    i2 ++
}
while(i2 < 14);
//Цикол for

for (var i3 = 6; i3 <= 8; i3++){
    document.write(i3);
}
//Прерывыние цикла break
for(var i4 = 99; i4 < 105; i4++) {
    if (i4 == 102){// Удалит из цикла 102
        continue;
    }
    document.write(i4);
    // if (i4 == 103){// Прервет цикл на 103
    //     break;
    // }

}