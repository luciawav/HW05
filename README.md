
I chose the data inflation and spent most of my time trying to understand the assignment. I first looked at some data visualizations on the web that I thought looked good to try to learn from them, I tried to analyze their code but with so little experience I just didn't have the ideas to convert the data.
![sample1.jpg](https://imgpile.com/images/DADmKo.jpg)
![sample2.jpg](https://imgpile.com/images/DADzaS.jpg)
![sample3.jpg](https://imgpile.com/images/DADV98.jpg)
BUT they ARE so beautiful

So then I realized I didn't even know how to import an already downloaded csv file into my sketch. But I quickly searched for some tutorials and followed them I understood.
![the tutorial i learnt from.png](https://imgpile.com/images/DADOIi.png)

I wrote this for the first time following the tutorial, then after running the console it worked, I was so happy I took a screenshot
![code.png](https://imgpile.com/images/DADQ82.png)
![runs.png](https://imgpile.com/images/DADg6G.png)
But I honestly didn't really understand what the codes did at first, but then I looked at a couple different tutorials to find what they had in common. I probably understand what they do （not that confident）.

I chose this data because of the obvious and the format and data, but I kind of regretted it when I started to learn it by following the online tutorial. But since I had been working on this data for a while at that point, I decided not to give up and continued with this data, but it is *really hard and challenging* 

I noticed the difference when I wrote my code according to my DATA TABLE. The getNum in the original video was maybe 1970-2022 in my case, and I was even worried at first that I was going to have to write 50+ rows to represent the data. So I opened my table to reanalyze it. I realized that the data in rows 1-5 doesn't really need to be fully displayed on the screen (in my personal opinion) I think the more important data is the country code and the change from 1970-2022.
![the challenging part.png](https://imgpile.com/images/DADSIE.png)
![the data analysis.png](https://imgpile.com/images/DAGIRP.png)

So my thought process at first was to use a line graph to show the trend of change
![sketch1.jpg](https://imgpile.com/images/DAGuf1.jpg)

But I gave up because I didn't know how to present the data for that many years, along with the data for over 700 countries, in a folded line. In another way, I don't know how to draw a fold line. So I thought actually the data in the front part doesn't need to be shown, I only need the years[] data, that is, the first five rows of the table don't need to be shown, so then the range is at i=5; i,table.columns[i]
![sketch2.jpg](https://imgpile.com/images/DAGwMj.jpg)

I found different tutorials where they mentioned the concept of map(), so I went to learn about it
![map.png](https://imgpile.com/images/DAGRjC.png)
it seems to need a range, so i guess may need to use the minvalue 
and the maxvalue in the data.
![min/max.png](https://imgpile.com/images/DAGvGC.png)

My biggest problem is as I said earlier, I learned about string, but most of my functions have a decimal point, so I keep getting a bug notice that I've got a bug that won't work when I use string. I'm wondering if I need a function to convert my string to have a decimal point in it

My computer science major friend told me about this, and since we're java based code, I should go get some java code
![new code.png](https://imgpile.com/images/DAtn4u.png)
then it make my life easier

So I went back to my first tutorial and I wanted to do some visualize data similar to what he ended up with. i needed an x-axis to show 1970-2022. then this is actually solved with for (let year = 1970; year <= 2022; year++)

the ellipse i'm drawing now is at a random position with a size based on the data of the table
![sketch3.jpg](https://imgpile.com/images/DAtNb2.jpg)


To summarize, the end result is basically how I wanted it to look, I'm just not very confident that I've mastered this method because I think I'm converting my own data based on online tutorials, and I don't know if there's going to be some better way to present this visualization. I hope to learn more about some other methods.