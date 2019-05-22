# Lyrical-GraphQL
Starter project from a GraphQL course on Udemy.com

Manage mondb instance here:
https://cloud.mongodb.com/v2/5cdd03899ccf646439c15440#clusters


## transcript of Application wrapup

We've pretty much wrapped up our application our users have the ability to create new songs they can

delete existing songs then they can create new lyrics that are associated with a song in upload or like

individual lyrics associated with each song.

I want to take a little bit of time now to do a quick wrap up on some of the really big important topics

around the application.

So let's open up our code editor and open up our song create file the suncream file is a good representation

of a typical component that I would expect to see inside of a graft application.

Some big things in here.

Remember that we make use of the re-act Apollo library to take a query and sandwich it together with

a component.

This means that inside of a typical re-act application I would expect to see some number of components

that are joined together with queries or mutations.

Next we made use the graph Cuil tag library to be able to write actual graphical queries or mutations

directly inside of a javascript file.

We saw the implementation at the very bottom of this where we wrote the GQ l tag and then a query string

and put the query inside of the query string.

The next thing I want to talk about is some of the ways in which we manipulated our data.

We saw that we manipulated our data on the back end by making use of different mutations in every single

case that we call the mutation we passed along some number of query variables.

In some cases we were able to call the query variable or excuse me passed the query variable directly

and when we called it.

And in some of the locations we had to do a little bit of fun mingling to figure out exactly how we'd

get some query variables into one of our queries.

The other big thing that we spoke about was how to refresh our data we saw how to refresh our data immediately

after running mutate by executing this refits queries we're not executing him but providing some number

of options to it with refits queries we can automatically rerun an entire query after the mutation has

been successfully completed.

This is a great way to refresh the data in your application but do be aware that it makes an entire

nother request to your backend to fetch that updated data.

One of the better ways of handling responses from our back end or I should say more performant ways

was by wiring up the use of that data ID from object inside of our top level index J.S. file.

Remember that by default the Apollo client doesn't really know about the data that is coming back from

the back end.

All it knows is that it issues a query.

It gets back some information and then it provides that information directly to a component.

If we then make a nother query and another component without defining this data ID from object then

Apollo just instantly assumes that that is to completely separate queries to completely separate sets

of data coming from the backend when in fact it might be the exact same query running again to make

sure that Appollo client can keep track of all the different records that are coming from back and we

define this data ID from object function the data ID from object function makes use of the id property

of every record that we fetch from our backend.

Now there are some assumptions behind this right here.

It does assume that we are using unique IDs between all the different records out and our entire application

when we're using Mongo D-B.

That's a very safe assumption to make because we are generally guaranteed that all the different IDs

stored in a mongo D-B database are going to be unique even across different collections.

So again that's a pretty safe assumption to make.

The last thing I want to talk about is how we make an individual query.

So for that let's check out our song detail component.

So this is really graph Cuil 101 that we saw graph kill 101.

Write the query wrap it with a graph to add a helper and then pass in the component that should receive

that data.

We saw that when we put together a query with the component component then received some amount of data.

As this props data.

Now the downside was that the component would try to render at least one time before that Data had actually

been fetched.

So we do need to make sure that whenever we put together a component that expects to have some data

we have to check to make sure that data is available before attempting to make use of it inside the

component this right here is a pattern that I would expect to see just all over the place throughout

your application.

I really would expect you to always make sure that your data is available before you try to consume

it in some way otherwise you're going to run into a lot of issues where you see errors like cannot read

properly something of undefined.

So in this case cannot read property title of undefined.

OK.

So I think that's pretty much it for the high level topics that we covered inside this application we've

covered up pretty good a number of features on the front end using Appollo client and react with our

graph to a back end.

We're now going to move onto our next section where we're going to think about how to put together a

full stack react and graphical application.

So everything from the database all the way to the front end.

Let's continue and take care of that in the next section.