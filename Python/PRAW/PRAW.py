import praw

reddit = praw.Reddit(client_id='XPrEVzJfVZ8wuA',
                     client_secret='GOFTH2hyfxa5qOhLHM-QuatS3Q0',
                     username='math548r',
                     password='adv39ctq',
                     user_agent='my user agent')

submission = reddit.submission(id='a7zss0')

for submission in reddit.subreddit('Python').hot(limit=10):
    print(submission)

