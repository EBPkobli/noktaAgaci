var elipsler =[];
var u_elipsler =[];
var yeniEklendi;
var kayit = [];
function setup() 
{
    createCanvas(800,600);
	yeniEklendi = false;
}

function draw() 
{
	background(0);
	for(let i=0;i<elipsler.length;i++)
	{
		stroke(255);
		strokeWeight(1);
		fill(50,200,50,150);
		smooth();
		ellipse(elipsler[i].x,elipsler[i].y,32);
	}
	if(yeniEklendi)
	{
		var min_uzaklik=10000;
		kayit = [];
		for(let i=0;i<elipsler.length;i++)
		{
			for(j=0;j<u_elipsler.length;j++)
			{
				let uzaklik = dist(elipsler[i].x,elipsler[i].y , elipsler[j].x,elipsler[j].y);
				if(min_uzaklik>uzaklik && uzaklik !=0)
				{
					var yeniCizgi = createVector(i,j);
					kayit.push(yeniCizgi);
				}
				
			}
		}
		yeniEklendi=false;
	}
	fill(255,0,0,240);
	for(let i=0;i<kayit.length;i++)
	{
		var ilkE = kayit[i].x;
		var ikinciE = kayit[i].y;
		line(elipsler[ilkE].x,elipsler[ilkE].y,u_elipsler[ikinciE].x,u_elipsler[ikinciE].y);
	}
   
}

function mousePressed()
{
	var v = createVector(mouseX,mouseY);
    elipsler.push(v);
	u_elipsler.push(v);
	yeniEklendi = true;
}