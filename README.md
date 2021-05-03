# Is It Hanford Friday, Alexa Skills Kit version

Here's a simple Alexa version of my [Is it Hanford Friday?](http://isit.hanfordfriday.info/) site, which is [also on GitHub](https://github.com/natevw/hanfordfriday).

I'm not sure if many companies in the area even "celebrate" Hanford Friday anymore (most are on a "four tens" schedule in recent years AFAIK) but I wanted to try out the skills API as well as the AWS Lambda service. Ended up being a fairly simple task, results presented here for reference.


Lo-fi deploy:

    (cd lambda; zip -r ../HanfordFriday.zip *)
