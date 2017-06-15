var Twit = require('twit');

var T = new Twit({
    consumer_key: 'XXXXXX',
    consumer_secret: 'XXXXXX',
    access_token: 'XXXXXXX',
    access_token_secret: 'XXXXXX'
});
  var hashtag1 = [
      "#girlpower",
      "#girlboss",
      "#geekgirl",
      "#girlsintech",
      "#womenintech"
  ];
  var hashtag2 = [
      "#hack",
      "#code",
      "#engineering",
      "#dev"
  ];
  var quotes = [
    ["Perfectionism prevents us from taking double steps in our career.", "Reshma Saujani, Founder of Girls Who Code"],
    ["I think one of the big challenges is actually cultivating beginners' minds.", "Caterina Fake, Co-Founder of Flickr and Hunch"],
    ["I am a big supporter of the minimum viable product.", "Kathryn Minshew, Co-Founder and CEO of The Muse"],
    ["talk about what you wish to create and see in the world.", "Shree Bose, Co-Founder of Piper"],
    ["Surround yourself with people who support you and get involved in [coding] programs.", "Sarah Friar, Chief Financial Officer at Square"],
    ["Feeling a little uncomfortable with your skills is a sign of learning.", "Vanessa Hurst, Co-Founder of Girl Develop It"],
    ["Trust in yourself, believe that your voice matters, and know that your words are good enough.", "Amber Gordon, Founder of Femsplain"],
    ["The more women (and minorities) that enter the field, the better it all gets for everyone.", "Tracy Chou, Software Engineer at Pinterest"],
    ["Be in tech, start something in tech, fund something in tech.", "Shaherose Charania, Co-Founder and CEO of Women 2.0"],
    ["See what positive change you can make. Especially for women and minorities.", "Rebecca Garcia, Technical Head of Product at Next Caller"],
    ["Having role models can go a long way.", "Alisha Ramos, Senior Front-End Designer at Vox Media"],
    ["Recognize and embrace your uniqueness. I don't think the ratios are going to change anytime soon.", "Erin Teague, Director of Product at Yahoo"],
    ["If we do not share our stories and shine a light on inequities, things will not change.", "Ellen Pao, Former CEO of Reddit"],
    ["Focus on being the best that you possibly can be.", "Privahini Bradoo, Co-Founder and CEO of BlueOak"],
    ["Never let anybody tell you you can't do it.", "Michelle Haupt, Operations Engineer at NASA"],
    ["I think men will always find an excuse for keeping women in their 'place.'", "Jean Bartik, Programmer at ENIAC"],
    ["Computing is too important to be left to men.", "Karen Sparck Jones, Professor at Cambridge Computer Laboratory"],
    ["You open the door for others to contribute their diverse perspectives.", "Kim Vu, VP of Local Market Delivery at Bank of America"],
    ["If you're passionate about [something] and you bring your talent, you'll be unstoppable.", "Megan Smith, CTO of the United States"],
    ["[The tech] industry is risk-friendly, so it's better to take the chance.", "Megan Berry, Head of Social Product and Community at RebelMouse"],
    ["Doing something new and different requires a level of drive and passion that is really hard to fake.", "Tracy Sun, Co-Founder of Poshmark"],
    ["Opportunities come when you least expect them, or when you're not ready for them.", "Susan Wojcicki, CEO of YouTube"],
    ["Learn to ask for things. You will constantly be figuring out how to acquire.", "Angie Chang, VP of Strategic Partnerships at Hackbright Academy"],
    ["You never know unless you dedicate serious time and effort.", "Terri Burns, President of Tech@NYU"],
    ["Too many people are overanalyzing. Sometimes you just have to go for it.", "Michelle Zatlyn, Co-Founder of CloudFlare"],
    ["Time.  How I spend it, where I spend it, and who I spend it with is the key.", "Andrea Jacobs, Director of Campus Growth at Spoon University"],
    ["Career choice and progression doesn’t have to fit into the standard societal mold.", "Dana Donofree, Owner of AnaOno"],
    ["Life is a series of building, testing, changing and iterating.", "Lauren Mosenthal, Chief Technology Officer at Glassbreakers"],
    ["You can and should set your own limits and clearly articulate them.", "Rosalind Brewer, President and CEO of Sam’s Club"],
    ["I challenge myself by going where I could learn and grow the most.", "Jess Lee, CEO of Polyvore"],
    ["A creative block is nature's way of calling in a moment of self-reflection.", "Susan Lin, Designer and Illustrator"]
  ];

// var params = {
//     q: 'robots',
//     count: 5
// }
// T.get('search/tweets', params, requestData);

// function requestData(err, data, response){
//     var tweets = data.statuses;
//     for (var i = 0; i < tweets.length; i++){
//         console.log(tweets[i].text);
//     }
// }
tweetIt();
setInterval(tweetIt, 1000 * 60 * 60 * 24);


function tweetIt(){
    var r = Math.floor(Math.random() * quotes.length);
    var h = Math.floor(Math.random() * hashtag1.length);
    var h2 = Math.floor(Math.random() * hashtag2.length);

    // three versions of the same tweet.
    var tweet = {
        status: quotes[r][0] + "-" + quotes[r][1] + " " + hashtag1[h] + " " + hashtag2[h2]
    }

    var shorterTweet = {
        status: quotes[r][0] + "-" + quotes[r][1] + " " + hashtag1[h]
    }

    var wayShorterTweet = {
        status: quotes[r][0] + "-" + quotes[r][1] 
    }


    // checks the amount of characters in the quote.  if >140, shorten.
    if (tweet.status.length > 140){
       tweet = shorterTweet;
    }
    
    if(shorterTweet.status.length > 140){
        tweet = wayShorterTweet;
    }

    // THE TWEET
    T.post('statuses/update', tweet, tweeted);
    
    // Server response.
    function tweeted(err, data, response){
        if (err) {
            console.log(data);
        } else {
            console.log("Tweet posted successfully.");
        }
    }
}
