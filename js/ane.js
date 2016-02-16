var aneObj = function()
{
	this.rootx = [];
	this.headx = [];
	this.heady = [];
	this.beta;
	this.sinbeta;
}
aneObj.prototype.num = 50;

aneObj.prototype.init=function()
{
	
	this.beta = 0;
	this.sinbeta = Math.sin(this.beta);

	for(var i=0 ; i < this.num ; i++)
	{
		this.rootx[i] = i * 16 + Math.random() * 20;
		this.headx[i] = this.rootx[i];
		this.heady[i] = canHeight -200 + Math.random() * 50;
	}
}
aneObj.prototype.draw = function()
{
	this.beta = this.beta + deltaTime * 0.001;
	this.sinbeta = Math.sin(this.beta);

	ctx2.save();
	ctx2.globalAlpha = "0.6";
	ctx2.lineWidth = 20;
	ctx2.lineCap = "round";
	ctx2.strokeStyle = "#3b154e";

	for(var i = 0; i< this.num; i++)
	{

		ctx2.beginPath();
		ctx2.moveTo(this.rootx[i],canHeight);
		ctx2.quadraticCurveTo(this.rootx[i], canHeight - 100, this.headx[i] + 50 * this.sinbeta, this.heady[i]);
		ctx2.stroke();
	}
	ctx2.restore();
}