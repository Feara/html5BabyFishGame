//碰撞检测判断大鱼和果子的距离

function momFruitsCollision()
{
	for(var i = 0; i < fruit.num; i++)
	{
		if(fruit.alive[i] && data.gameOver == false)
		{
			var l = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);
			if( l < 900)
			{
				if (fruit.fruitType[i] == "orange")
				 {
				 	data.addScore();
				 	data.orangeNum ++;
				 	mom.bigBodyCount = Math.min(mom.bigBodyCount + 1 , 7);
				 }
				 else
				 {
				 	data.double();
				 	data.blueNum ++;
				 	mom.bigBodyCount = 7;
				 }

				wave.born(fruit.x[i] , fruit.y[i]);
				fruit.dead(i);

			}	
		}
	}
}

//碰撞检测 大鱼和小鱼

function momBabyCollision()
{
	if(data.gameOver == false)
	{
	var l = calLength2(mom.x, mom.y, baby.x, baby.y);
	var num = data.orangeNum + data.blueNum;
	if (l < 400 && num) //如果大鱼口中有果实则 碰撞有效
	{
		baby.recover();
		data.orangeNum = 0;
		data.blueNum = 0;
		mom.bigBodyCount = 0;
		halo.born(baby.x, baby.y);
	}
	}	
	
}
