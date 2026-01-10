
import { getAssetPath } from './utils/assetPath';
import { AudioLog, BlogEntry, FilmReel, Item } from './types';

export const INITIAL_ITEMS: Item[] = [
    { id: 'recorder', name: 'Voice Recorder', icon: '📼', description: 'Contains cassette tapes with recorded conversations.' },
    { id: 'notebook', name: 'Blog Archive', icon: '💻', description: 'Password-protected archive of historical logs.' },
    { id: 'film', name: '8mm Film Reels', icon: '🎞️', description: '40 reels total, marked with 4 different glass shapes for ordering. Each reel shows no more than 2 glass types.' },
];

export const AUDIO_LOGS: AudioLog[] = [
    {
        id: 'log_auto',
        searchId: 'AUTO_PLAY',
        title: 'Ash_20201020',
        isAutoPlay: true,
        locked: false,
        content: `
Faint background music can be heard - crisp cymbals accompanied by delicate bass playing. Nearby, a glass full of liquor is pushed across the bar.
    
__Stranger 1__：Try this.
__Apple__：So this counts as a cocktail?
Stranger 1：This is a very classic approach - dropping a shot glass of spirits into beer. It's called a __Boiler Maker__, and we're using gin with pale ale beer, the flavors pair really well.

Sound of drinking.

Apple：It's actually really refreshing.
Stranger 1：Would I lie to you? So, tell me, I heard you wanted to talk to me about something.
Apple：Oh, yes. I was wondering if you'd be willing to hire some part-timers...
Stranger 1：You mean yourself?
Apple：Yes—well, not exactly, I just wanted to learn more first.
Stranger 1：Why curious?
Apple：Although I've only been a regular for two months, honestly, I really like the atmosphere here. You and the customers all have great chemistry, everyone's conversations are interesting... In short, this place looks new, but somehow it has the feeling of a century-old establishment.

After a bout of quiet talking, customers in the distance share a knowing laugh.

Stranger 1：Hey, what's going on there, watch your manners—anyway, this isn't actually a new bar. We've been running elsewhere for many years before moving here, and the regulars followed us.
Apple：I see. But if the atmosphere was that good, why go through the trouble of moving?
Stranger 1：Uh... various reasons.
Apple：And there's no door, hidden next to a bathroom in another bar... Sorry, I don't mean anything by it.
Stranger 1：It's fine, you'll learn about many things later.
Apple：So about what I asked you...
Stranger 1：To be honest, I hadn't planned to hire part-timers, but if you want to come—you can. However, if you want to work here, seriously learning about cocktails is essential. I don't want you coming here every day just to slack off without spending money!
Apple：Don't worry, I'll definitely study hard.`
    },
    {
        id: 'log_awen',
        searchId: 'Vin_20201020',
        title: 'Vin_20201020',
        locked: true,
        content: `Staggering footsteps approach from afar, and someone breathing heavily sits down in front of the recorder.

__Apple__：How did it go?
__Vin__：Buy me a drink.
Apple：What happened—I mean, did he agree?
Vin：Buy me a drink first!
Apple：Then I'll make you one myself... this one.
Vin：What, trying to start your shift today? I heard the bar's rule is you need to study for half a year before being allowed to make drinks—but now he's drunk because of me, so you'll have to do it.

Sound of glasses and ice clinking, then a glass is heavily placed in front of the recorder. Sound of sipping and tasting.

Apple：How is it?
Vin：Hmm... I shouldn't have rebelled.
Apple：What do you mean?
Vin：Let's just take it step by step, the proper way.
Apple：Bad?
Vin：Try it yourself.

Sound of sipping, then liquid being spat out.

Apple：Ugh—this is undrinkable. Well, I'll wait until I've practiced more before making you a drink.
Vin：Don't worry, I'll remember.
Apple：So he agreed?
Vin：__Ask him yourself tomorrow__.
Apple：By the way, do you know why the old bar closed?
Vin：Know? It's haunted, what other reason could there be.
Apple：No way, really?
Vin：Of course it's fake.
Apple：I thought so.
Vin：So curious... do you want to hear the truth?
Apple：Yes.
Vin：That's the reason.
Apple：What do you mean?
Vin：Figure it out yourself, otherwise why would we move to a place like this.`
    },
    {
        id: 'log_ashan',
        searchId: 'Ash_20201021',
        title: 'Ash_20201021',
        locked: true,
        content: `Very quiet, no background music can be heard. A heavy wooden box is placed on the table.

__Ash__：Here's the thing.
__Apple__：I can really use this?
Ash：Go ahead, you don't even need to buy film, there are dozens of rolls.

Sound of rummaging.

Apple：Sorry, but whose camera is this? I see some film has been marked, it must have already been shot.
Ash：Are you saying I'm not cultured enough to have such an elegant hobby?
Apple：No... I didn't mean that...
Ash：I really don't have this hobby. A long-time regular left it behind. He wanted to film daily records of the bar, I didn't agree. He tried to film secretly, and I confiscated the equipment after discovering it.
Apple：So why are you letting me film now?
Ash：Did I say you could film in the bar?
Apple：I thought...
Ash：Hey, I'm kidding. Film if you want, I don't care anymore.
Apple：What about these marked films, should I return them to...
Ash：Take them, take them all, I don't want to see them.
Apple：Then I'll make proper labels.
Ash：Whatever... Wait, you're going to film now?

Sound of operation.

Apple：Come on, teach me to make a drink.
Ash：So annoying... Fine, pick a recipe card from that box and hand it to me, whichever one you draw.
Apple：This one, let's go. Wait, let me mark the film first.
Ash：Why are you drawing __four champagne glasses__ on it? This drink doesn't use that glass.
Apple：I know, it's not for that... I have other plans.`
    },
    {
        id: 'log_mengqi',
        searchId: 'Monty_20201023',
        title: 'Monty_20201023',
        locked: true,
        content: `Quiet, soothing piano solo. A sudden sneeze temporarily interrupts other customers' conversations. Just as the talking resumes, another sneeze.

__Apple__：I thought we wouldn't see you for a while, they said you were sick.
__Monty__：Caught a cold, more alcohol needed. Get me my bottle of whisky.
Apple：With ice?
Monty：Just some hot water.

A bottle is placed on the bar, a thermos cap is opened. After some subtle friction and clinking, sipping sounds follow.

Apple：What kind of drinking method is this, whisky with hot water?
Monty：Just imagine the whisky as tea leaves, this is my calming bedtime tea.
Apple：Learned something new.
Monty：No, I could teach you about various types of __Martini__, but whisky with hot water—God, only two people in the world drink it this way. Don't try selling this to others, they won't find it tasty.
Apple：Two people? Who else besides you?
Monty：Someone you don't know, a remarkable person.
Apple：Oh? Also a customer here?
Monty：Sort of, disappeared long ago.

A moment of silence.

Monty：Get another glass, drink with me.
Apple：__Ash__ doesn't allow me to...
Monty：Who cares what he allows.

Another glass is placed on the bar, liquid poured into it.

Apple：Alright, let's toast to—
Monty：One less time with each time.
Apple：What does that mean?
Monty：—Every moment is worth celebrating, we don't always need a reason to toast.
Apple：One less time with each time, that's quite a saying.
Monty：That's what the friend who also likes drinking whisky this way said.
Apple：I think I've heard them mention this person, also an old customer.
Monty：No, he was my friend.
Apple：Tell me, what kind of person was he?
Monty：Back then we both worked for a theater company, he made documentaries, I did music. After work we'd find a bar to continue talking about films. He especially enjoyed talking from Abbas to Kurosawa, all his favorites. At first we went everywhere, then we discovered this bar. He immediately recognized __Lee Chang-dong__'s signature on the poster on the wall, and after that we never went anywhere else.
Apple：The poster?
Monty：Right, it's hanging behind you right now.
Apple：So he's a documentary director?
Monty：Hard to say, just like I'm not really a musician. You can only say, I love music and can make some music, while he loved cinema, loved it his whole life. Even in his forties, he was still preparing for his debut film.
Apple：I heard Ash say he even wanted to make a documentary about the bar, but Ash didn't allow it.
Monty：He wanted to use this camera to record his life, that's all. It just happened that the bar's cyclical daily routine perfectly aligned with his life.
Apple：Now Ash changed his mind, so the camera is in my hands.
Monty：Go use it, he's vanished from the world anyway.

Sound of sipping.

Apple：You were his friend, don't you know where he went?
Monty：No idea, don't know if he's alive or dead, all previous contact methods are invalid.
Apple：Well... I found some film reels he shot.
Monty：Hey, when these moments were first recorded on film I thought they were ordinary, but in a flash they've become historical relics.
Apple：I'm thinking, maybe they'll be useful later...
Monty：Use them, they're all yours now. Make me another cocktail.
Apple：I'll call Ash over.
Monty：No need, you do it.
Apple：Which one?
Monty：The one that made __Vin__ throw up.
Apple：But I just messed it up once, making it again today won't improve it.
Monty：I'm here, trust me. Give me the camera, I'll film it for you. Use this reel? The one with __three champagne glasses and an old fashioned glass__...
Apple：Right, use that one.`
    },
    {
        id: 'log_mengqi_2',
        searchId: 'Monty_20201030',
        title: 'Monty_20201030',
        locked: true,
        content: `Accompanied by customers at the far end of the bar repeatedly exclaiming, a pile of ice is dumped into the sink.

__Apple__：Incredible, such a small adjustment has such a huge impact on the drink's presentation. Even __Vin__ didn't give me a hard time tonight, thanks to you.
__Monty__：You're welcome.
Apple：How did you discover it? Why wouldn't __Ash__ admit it when I asked him?
Monty：He's not refusing to admit it, he's just not aware. I've watched him make this drink for many years. Every time he pours gin he reaches surface tension, but when pouring whisky he's always a millimeter short. Maybe it's purely a difference in feel, but when making spirit-forward cocktails, the slightest difference can hugely impact flavor.
Apple：I've learned.

Sounds of searching, then a book is placed on the bar.

Apple：I found this, thought you might be interested.
Monty：This book... where did you find it?
Apple：In those boxes in the warehouse, with lots of stuff moved from the old bar. Anyway... I thought you might be interested.
Monty：I am indeed interested... did you open it?
Apple：Not yet.
Monty：What do you think this book is about?
Apple：Looks mysterious.
Monty：That's just the cover, look inside.

Sound of pages turning.

Apple：What does this mean? Is it a novel? Why is the content completely different from the cover?
Monty：I don't know how you found it, and you're probably not interested in reading it carefully—but there's an interesting story behind this book I can share with you.
Apple：What story?
Monty：Make me another drink first.
Apple：Same one?
Monty：No, a classic one, made with a shaker.
Apple：__White Lady__? __Side Car__? __Whisky Sour__?
Monty：The whisky one, make the version with sherry.
Apple：Got it, but I haven't made it before, can only follow Ash's recipe.
Monty：No problem, I'm not Vin, don't have that many requirements.
Apple：Tell me the story while I am making it, what's behind this book?

Accompanied by Monty's narration, sounds of ice hitting metal occasionally come through.

Monty：When we first discovered this bar, the missing friend had just finished his first novel.
Apple：Didn't he want to make films? How did he start writing novels?
Monty：Who knows? Maybe because it doesn't cost anything.
Apple：A full-length novel then.
Monty：Rather than a novel, it's more like a collection of stream-of-consciousness writing exercises, flowing thoughts drifting around, you know? Nobody could read through it. I advised him to revise, he refused, even thought the publishers who rejected him knew nothing.
Apple：What happened next?

Sound of sipping liquid.

Apple：How does it taste?
Monty：Not bad. Anyway, after several failed submission attempts, he had a wild idea. He bought over a dozen different books from bookstores, tore off their covers, printed his novel, bound it, then ran to bookstores to secretly hide them on shelves.
Apple：What?
Monty：He even went to nearby universities, deliberately leaving books on cafeteria seats.
Apple：Did he want people to read his work that badly? But scattering books around, there's no way to get feedback, right?
Monty：That's what I thought at first. Later when he disappeared, I had the wild idea of searching through the book for clues—guess what? I still couldn't read it, but I discovered he left a contact email at the end.

Sound of pages turning.

Apple：Did you send a message?
Monty：It bounced back, the email had been cancelled by then. But at least it proved he hoped to be seen and get replies.
Apple：Really a remarkable person. So after this he started thinking about making films?
Monty：Before, after, can't say which came first. He was always like a headless chicken, ended up accomplishing nothing and just lost himself.
__Stranger 1__：__What a remarkable person, he's just crazy.__

Recording unexpectedly interrupted.`
    },
    {
        id: 'log_awen_2',
        searchId: 'Vin_20201030',
        title: 'Vin_20201030',
        locked: true,
        content: `Sound of a broom sweeping broken glass, vague cursing in the background. Nearby, heavy breathing.

__Apple__：Did the bleeding stop? Want me to get you another towel?
__Vin__：No need, just a scrape. If I hadn't had a few drinks today, how could he have hurt me?
Apple：Why did you have to? Haven't you known each other for years? Why say things he doesn't want to hear?
Vin：I've been holding it in for too long. Tired of him acting all day, like he's the only one in the world who cares.
Apple：So you also knew the missing person?
Vin：I was so annoyed by him! Talking all day long, as if everything in the world relates to making films. And then what? Couldn't even write a script for years, getting drunk before noon every day. If that's not decadence, what is?
Apple：I heard he wrote a novel...
Vin：Nobody reads it, what's the point? Whatever, just make me a drink first.

Ice and liquid clinking against metal, being shaken and poured. Sound of sipping.

Vin：Why does it smell oxidized? Like rust!
Apple：I don't know, I followed the recipe... Hey, let me make you a new one, okay?
Vin：Will remaking it be better?
Apple：I don't know...
Vin：What day are you off?
Apple：Every Tuesday...
Vin：So that's __4 days from now__, when __Ash__ works himself, right? I'll come back then for the correct taste. This one's on you.
Apple：—Wait, you mentioned the old bar earlier, where exactly is it?
Vin：Just __two streets south, there's a bookstore that's been open for years, next to the bookstore is a small alley__—wait, where's my key?
Apple：Maybe it fell under the bar when you two were fighting. I'll look for it when I clean the fridge in a few days.
Vin：I really hate these artsy youth, you know? Especially when they're clearly not young anymore.
Apple：I understand.
Vin：You understand nothing! I think you got along with him best.
Apple...
Vin：Don't say I didn't warn you. When you find the key, don't let curiosity drive you to explore the old bar and bring back something evil.
Apple：No... really? Have you been inside?
Vin：Of course!
Apple：What did you see?
Vin：None of your business. Just think about it, the old bar's been closed for almost a year, still can't rent it out. There's gotta be some reason, right?`
    },
    {
        id: 'log_ling',
        searchId: 'Lynn_20201103',
        title: 'Lynn_20201103',
        locked: true,
        content: `Noisy chatter mixed with clinking glasses, footsteps approaching. Conversation intermittent.

__Lynn__：What are you drinking?
__Apple__：What?
Lynn：I'm asking what drink you have? I see you're drinking quite seriously.
Apple：Oh, this is called __Francis Albert__.
Lynn：Why come to the bar on your day off?
Apple：What?
Lynn：I heard them say you usually work at this bar?
Apple：Oh, right, yes.
Lynn：What should I call you?
Apple：Everyone calls me Apple.
Lynn：Because you like eating apples?
Apple：My screen name was originally "doesn't like eating apples" because I naturally don't like eating apples, but over time it got shortened to Apple...
Lynn：You look young, still in school?
Apple：Yes, studying photography.
Lynn：I thought so, seeing you with a camera and recorder.

Microphone makes a scraping sound, as if the recorder was picked up and put down.

Apple：Right, I went to shoot some things.
Lynn：What did you shoot?
Apple：Can I tell you something? Don’t tell anyone else.
Lynn：I just got here, don't know anyone.
Apple：This bar moved locations. The old bar is nearby, and __I happened to have the key__, so on my day off, I went in to look around.
Lynn：How was it, fun?
Apple：I'll show you next time. It looks like a very old place, lots of traces of time...
Lynn：Sounds interesting, because I quite like this new place too. Hidden next to a bathroom in another bar, who thought of that?
Apple：I heard others say it was the owner's careful arrangement...
Lynn：Why hesitate to say more?
Apple：Because the rumor is absurd, saying the old bar is haunted.
Lynn：So that's why you went today. Well, did you see ghosts?
Apple：It was a bit scary, but no ghosts.
Lynn：Don't bring anything unclean here, I still want to come drink.
Apple：They say that's why this place has no door. The owner calculated that __this way evil things can't enter__.
Lynn：Forget about ghosts for now. Want to try my drink?
Apple：I...
Lynn：Hey, what am I thinking? You're a bartender yourself, you must know everything.
Apple：No, I just started learning.
Lynn：Then you must try this one.

Several seconds of pause.

Lynn：Is it good?
Apple：So what's it called?
Lynn：__Little Italy__.
Apple：Delicious.
Lynn：Next time I come, you have to make it for me!`
    },
    {
        id: 'log_ling_2',
        searchId: 'Lynn_20220215',
        title: 'Lynn_20220215',
        locked: true,
        content: `Quiet space, background music barely audible. A mechanical clock ticks crisply. Not far away, a spring door suddenly creaks.

__Lynn__：Excuse me, are you open?
__Apple__：Yes, yes. Sorry, I fell asleep.
Lynn：It's okay. Seems quite empty today.
Apple：This day every year is usually quiet.
Lynn：Then I came at the right time.
Apple：Please sit. What would you like to drink?
Lynn：There's a promised drink, remember?
Apple：Promised... oh, I remember now! You're... sorry, I forgot.
Lynn：Not your fault. Last time we talked all night, but I don't think I introduced myself.
Apple：It really has been a while... Never mind, you can call me Apple—
Lynn：I remember. Haha, by the way, my name is Lynn.
Apple：Just one character? Lynn.
Lynn：Right, one character.
Apple：Lynn who loves __Little Italy__.
Lynn：Looks like you finally remembered.

Sound of ice clinking with glass, liquid pouring.

Apple：Sorry, I don't remember the exact taste anymore.
Lynn：It's okay, I don't remember either, but this one tastes great.
Apple：Thank you.
Lynn：Really, not a single person here. Even __Vin__ and __Monty__ aren't here.
Apple：You know Vin and Monty?
Lynn：Yes... last time I came, they introduced you to me.
Apple：The two of them, together? Strange, they usually don't drink together.
Lynn：Perhaps it was just the whiskey at work.
Apple：I feel like most times drinking makes their conflict worse—anyway, Monty hasn't been here for months, and Vin... my boss won't let him come to this bar anymore.
Lynn：Won't let him come? Isn't he an old customer? Known for years. Did something serious happen?
Apple：Serious but not serious. Hard to explain in a sentence or two. Remember last time when I mentioned the old bar?
Lynn：Of course! The old bar that had to relocate here because of ghosts!
Apple：Shh...
Lynn：Why worry, there are no other customers—since there's no business tonight, why don't we close early and go explore that place?
Apple：Can't go anymore.
Lynn：I remember you said it's nearby—has it been rented for other purposes?
Apple：That place has been demolished, nothing left.
Lynn：So sudden!
Apple：Not sudden, you just haven't been here in too long. It's been demolished for __more than half a year__.
Lynn：By the way, didn't you bring your camera there once? Can I see what you filmed?
Apple：I can... are you sure you want to see it?
Lynn：Might as well, I'm bored.

Sound of a bag dropping on the bar.

Apple：It's all here, you can look at anything.
Lynn：If there's anything I can't see, tell me in advance.
Apple：Nothing you can't see, it's all just daily bar stuff.
Lynn：Just kidding. Finished this drink, make me another first.
Apple：What would you like?
Lynn：Whatever you make, I'll drink.

Sound of searching through coasters.

Apple：How about this one?
Lynn：What's this?
Apple：We write recipes directly on coasters.
Lynn：So this drink is called this? __Jam 10.30__, why that name?
Apple：It means improvised on a certain month and day. Felt it was good, so recorded the recipe.
Lynn：First time seeing this kind of naming, so casual. Okay, I'll have it.

Ice sliding through glass, bar spoon stirring. Film canisters being dumped on the bar.

Lynn：Why are there four glasses drawn on each film canister?
Apple：It's my numbering system...
Lynn：Marking order? Base four?
Apple：Not base four.
Lynn：I found it! Seems like each canister has at most two types of glasses, and none has two pairs. Always one single, three of the same. Or all the same. So the most important thing is the position of that single glass, am I right?
Apple：Actually the order doesn't matter, I just need to...

Sound of film canisters being rearranged.

Apple：Try it.
Lynn：Oh! I know their pattern. Should be arranged like this, left to right, or right to left, right? But which one should I watch first?
Apple：Fifth from the right.
Lynn：Let me see... this is quite scary. Weren't you afraid going alone?
Apple：Don't you want to try the drink first?
Lynn：Wait... what's this?
Apple：Hm?
Lynn：Look at this one, doesn't it look like someone's crouching in this corner?
Apple：There can't be anyone, it's probably my own shadow.
Lynn：... look, even though the camera panned away, it's still here. Here, it seems like it... moved forward a bit?

Recording unexpectedly interrupted.`
    },
    {
        id: 'log_awen_20211020',
        searchId: 'Vin_20211020',
        title: 'Vin_20211020',
        locked: true,
        content: `The bar bustles cheerfully with a relaxed atmosphere. As the door opens, conversation abruptly stops.
Foot steps gradually approach the bar.

__Vin__：Keep talking, go on.
__Apple__：Hey, __Ash__ said you can't come, forgot?
Vin：He's not here anyway. What, my money isn't money?
Apple：Just warning you, he'll be back in a few days.
Vin：Scaring me? I'll come even when he's here.
Apple：Fine, what will you have?
Vin：Doesn't matter what, it's your __one-year work anniversary__, right? I'm giving you a whisky.
Apple：I think you just want to keep a bottle here to drink yourself?
Vin：Not a matter of principle. Enough with the endless talk, hurry up and make me a drink with it.

Ice clinks with glass, liquid pours.

Vin：Oh, making this one.
Apple：Had it before?
Vin：Isn't this the one that person drinks?
Apple：Who?
Vin：Playing dumb? Fine.
Apple：This is a modern classic, lots of people drink it.

Liquid enters glass, sipping sound.

Vin：Not good enough, need more practice. If you only make it to this level, not enough to impress a girl.

Sound of water washing tools.

Vin：What, unhappy now? Can't take two comments?
Apple：No, you saying it directly is better than others... forget it, never mind.
Vin：What's wrong?
Apple：Just feels weird.
Vin：Weird? It's all because you took my key to film randomly at the old bar, brought back unclean things, and harmed __Monty__.
Apple：I didn't...
Vin：Come on, you can lie to others, don't lie to yourself.
Apple：...but I didn't tell anyone, how does everyone know?
Vin：Don't worry about that. By the way, there's something else.
Apple：What?
Vin：The old bar building is being demolished.
Apple：What? So sudden?
Vin：Haven't been there in a while, right? It was planned long ago. They just started tearing it down, half demolished. If you want to film, __go tomorrow__, any later and it'll be gone.
Apple：Actually demolishing it...
Vin：Who can say about these things.
Apple：Does Ash know?
Vin：Don't worry, he doesn't care. Hey, where's Monty? He hasn't been here in a while, right?
Apple：You know about that too? Last time was the __anniversary celebration__? We even bought a cake that day...
Vin：I guessed. Know why? Because the last time that missing guy appeared in the bar was also the __anniversary__.
Apple：You're saying he might also...
Vin：You mean disappeared? No. Look—

Water sound stops, subtle phone movement on the bar.

Apple：Where's this? Who took the photo?
Vin：A bartender from another bar, asking if it's my friend.
Apple：Oh... no wonder he asked me to make __XYZ__ that day.
Vin：This guy, quite ceremonial. So you understand now? You miss him, but he switched bars, won't come to yours anymore. Even blocked me. Who's the most loyal regular customer anyway.`
    },
    {
        id: 'log_mengqi_20210425',
        searchId: 'Monty_20210425',
        title: 'Monty_20210425',
        locked: true,
        content: `Microphone makes slight scraping sounds, as if in a pocket, moving with footsteps.
Not far away, a door closes, noise instantly quiets.

__Monty__: Want to smoke one with me?
__Apple__：No... can't. Haha, but I can light it for you.

Lighter wheel spins.

Monty：No, you're burning my hair—
Apple：You have plenty of hair, burning a bit won't show.
Monty：Hey, how much did you drink tonight?
Apple：Not much... see, if I don't drink, __Ash__ has to, but Ash is already drunk, so only I can drink, right? Haha.
Monty：Okay, fine.
Apple：The one you asked me to make, yes, delicious.
Monty：Of course, I only had one sip, you drank the rest.
Apple：Why is it called that name?
Monty：Look it up yourself.
Apple：I thought you'd know.
Monty：Actually most cocktail names are randomly chosen, just like naming a cat you met on the street.
Apple：I know that, sometimes we randomly make something, and customers rush to name it. You should see these people...
Monty：For example my favorite is called __Goooooose__. Asked Ash why that name, he couldn't explain either.
Apple：What drink is that? Never heard of it.
Monty：Seems your research of his coaster recipes isn't thorough. By the way, lots of new faces at the bar today, and they all know you well. Looks like Ash is taking a back seat.
Apple：Why are you getting shy? I thought you... you guys were the real owners of this bar.
Monty：Just feel... everything's changed.
Apple：Earlier before Ash got drunk he told me, customers come in waves. The old wave always tires, or their lifestyles change and they gradually disappear, but there's always a new wave, those young people who find everything fresh.
Monty：Let's not talk about this. I called you out here for something important.
Apple：Can't you say it tomorrow? I'm this drunk, can't remember anything.
Monty：Ask __Vin__ for the key, go to the old bar again. On the wall facing the blinds there's a wall lamp. An air plant hangs dead on the lamp rod. Lift it, there should be a poem written on the wall in very small letters.
Apple：Who wrote it? That missing person?
Monty：I don't know. When I discovered it, it was already there. For a while, this bar was quite literary, even organized writing groups and such. Anyway, maybe you can figure out who wrote it.
Apple：I'm not going. Honestly, I'm not interested in finding out where that missing person went anymore.
Monty：What about your documentary?
Apple：Well, we'll see... I'm quite happy living like this every day. Really, I don't know why at the beginning I had to pretend to be insightful, pretend to maintain a detached stance. Now I think that's quite pretentious.
Monty：Are you serious?
Apple：I'm drunk, already forgot what I just said... oh, you mean Vin, right? Why don't you just ask him for the key yourself? You guys have known each other so long, how did it get to this point.

Brief pause.

Monty：Okay. Let's not talk about this.`
    },
    {
        id: 'log_ashan_20220204',
        searchId: 'Ash_20220204',
        title: 'Ash_20220204',
        locked: true,
        content: `In the background, noisy electronic music gradually fades, slow jazz piano rises. Distant customers voice doubts.

__Apple__：If they hadn't brought shochu, you'd probably never remember this recipe.
__Ash__：There are many good recipes. If one or two are forever forgotten, so what? I always say, isn't there alcohol in cocktails? If there's alcohol, it tastes good. Deny this and you're not a qualified drinker!
Apple：What kind of nonsense is that?
Ash：Hahaha, don't mind me. I just want to tell you, enjoy the alcohol, enjoy the changes. Every drink tastes like it does for a whole chain of reasons. Feel these differences, otherwise what's the point?
Apple：I'm curious, now you spend less and less time in the bar. Do you remember how you felt those first years when you opened? Compared to now?
Ash：Honestly, every time customers change, I renew myself too. If I didn't, I'd probably be lost like __Old Mo__.
Apple：Speaking of which, I went to the old bar again recently.
Ash：Wasn't it all demolished?
Apple：I thought you didn't even know about that.
Ash：Did you go before it was torn down? You stole __Vin__'s key again?
Apple：Asked for it properly. Anyway I saw a poem on the wall, signed by...

Sound of pencil on paper.

Apple：Do you remember who wrote it on the wall?
Ash：How would I remember—besides, you think, could this be someone's name?
Apple：What if it's his nickname?
Ash：Could this be someone's nickname?
Apple：So it might just be a pen name... By the way, someone recently mentioned the old bar used to do writing groups? Was everyone writing novels?
Ash：So many years ago, someone still remembers this. Thinking back, we really had passion then, had to get involved in everything.
Apple：Can I see these things?
Ash：We printed some manuscripts then. A customer even drew a human skeleton as the cover... Who knows if we brought it when we moved. If it's in the warehouse it's there, if not it's gone.

Brief silence.

Ash：I suddenly remembered I once made a drink, could never think of a name for it. So when customers ordered, they'd habitually stare and nod at me, and I'd understand.
Apple：Really?
Ash：Anyway someone later copied down the recipe, they used __a punctuation mark__ as the name.
Apple：The person who copied the recipe, do you remember who?
Ash：Too long ago, don't remember. But how to make this drink, maybe I can recall.`
    },
    {
        id: 'log_laochen_20221105',
        searchId: 'Old Chen_20221105',
        title: 'Old Chen_20221105',
        locked: true,
        content: `Bustling noise, several hoarse voices together singing birthday song.

__Old Chen__：Excuse me, I'd like another drink.
__Apple__：What?
Old Chen：I want to order.
Apple：Sure, what would you like?
Old Chen：Haven't decided.
Apple：Then think about it—

Several bodies bump into the bar, clinking toasts approach.

Old Chen：This place is so lively...
Apple：Oh, sorry, a regular's birthday, all university students, so a bit unruly. You said you want what?
Old Chen：It's okay, I need more time. If I really can't decide... anyway I'll __come again tomorrow__.
Apple：Thank you for your patronage.
Old Chen：Don't mention it, it's a rare opportunity... By the way, I heard this bar has a previous location, it wasn't in this place before, right?
Apple：That's right. The old bar is nearby, was demolished last year. We've been here quite a while.
Old Chen：Then that matches. I thought so, this painting looks very familiar, it used to hang above the liquor cabinet at the old bar.
Apple：I wouldn't know. I only came after this place opened.
Old Chen：Seems I remember correctly. Before, someone else made the drinks.
Apple：My boss, __Ash__.
Old Chen：Right! Called Ash. Before I went abroad I often went to drink his cocktails. I knew __Old Mo__, __Zixun__, __Song Yang__ and them.
Apple：I haven't seen any of those people you mentioned.
Old Chen：Ah, seems they're like me, gradually scattered. I thought I'd see some familiar faces this time.
Apple：Do you know __Monty__?
Old Chen：The one who makes music, right?
Apple：Right. After we moved he came here a few times, but doesn't come anymore either.
Old Chen：That's too bad. I brought this, wanted to catch up with everyone—

Sound of zipper opening, glass moving.

Apple：This is... oh, I know this! Isn't this the small magazine they made before?
Old Chen：You've actually seen this, I thought you wouldn't know about it.
Apple：I only saw photos. Later searched the warehouse forever, couldn't find a single copy.
Old Chen：Unfortunately mine has fallen apart, some pages are lost too.

Pages turning rapidly.

Apple：... This is so Old Mo! Heard from someone, he struggled forever and couldn't write a word, finally just threw out a random setting and keyboard-smashed to finish it.
Old Chen：Did Ash say that?
Apple：Wouldn't be him, he doesn't remember anything from before.
Old Chen：Seems someone else in the bar remembers those days.
Apple：Speaking of which, do you remember someone whose signature is an exclamation mark?
Old Chen：Let me look... there should be a piece by him in this booklet... might be lost.
Apple：You know this person?
Old Chen：Not familiar, very unfamiliar, maybe only met once. They called him... __Dabai__ or something, never saw him again after. He seemed familiar with an even earlier group, I basically don't know them.
Apple：There's an even earlier group.
Old Chen：Right, this bar's history is longer than you think, or rather, regular turnover is faster than you think—of course, before pushing through the door today I didn't expect to not recognize a single person.
Apple：Really unexpected.
Old Chen：Seems Old Mo's idea was right. Though he said he wanted to make a documentary about the bar, he was really recording that group of people. After ten years, the bar might still exist, but people will definitely have scattered.
Apple：Wait a moment.

A backpack being dragged, placed on the bar.

Old Chen：This is...
Apple：Old Mo filmed some material, left all the reels.
Old Chen：This this... but I remember Ash didn't let him film?
Apple：Before the boss stopped him, he filmed some things.
Old Chen：This... can we watch now? Which should I watch first?
Apple：I don't know the order either, just pick one.
Old Chen：These are all marked? Then I'll watch... this one with __four martini glasses__. Oh, can you make me a martini?
Apple：I'll make you another one instead. Leave it to me.

Ice clinks with glass.

Old Chen：... Look! Look at this!
Apple：These people... oh right, this is you.
Old Chen：That's Song Yang, __Ah Zhao__, Zixun. This person is... what's his name?
Apple：I see you. That's you, right? So young.
Old Chen：This must be __seven or eight years ago__... and this one, look, this is Old Mo and Zixun.
Apple：—wait, do you know her?
Old Chen：Who? Let me see... don't know her, but not sure, too blurry.

Brief silence.

Old Chen：What's wrong?
Apple：... Nothing, I'll ask her myself.
Old Chen：What's going on? Tell me.
Apple：I knew it, some people didn't tell the truth.
Old Chen：About what?
Apple：Talk later.

Playful noise comes again, empty glasses placed on the bar one after another.`
    },
    {
        id: 'log_laochen_20221106',
        searchId: 'Old Chen_20221106',
        title: 'Old Chen_20221106',
        locked: true,
        content: `Quiet space, background music so slow it's sleep-inducing.
Sound of door pushing open.

__Old Chen__：Hello!
__Apple__：Oh, you came.
Old Chen：I brought you some food... wontons and pig trotters, but yesterday forgot to ask if you'd be off today.
Apple：No, I'm basically always here.
Old Chen：Where's __Ash__? Doesn't come daily now?
Apple：He comes, but leaves early.
Old Chen：It's only... not even eleven.
Apple：Can't help it, if he stays up late he can't sleep. Doesn't matter, when he comes he just lies on that single sofa and sleeps anyway.

Sofa creaks, someone is sitting on it.

Old Chen：I know this sofa, rescued from the old bar right? Still quite comfortable.
Apple：Comfortable is comfortable, whoever sits on it wants to sleep, but it looks like it's falling apart.
Old Chen：It was like this when I first saw it.
Apple：Okay... what to drink?
Old Chen：Have sherry?
Apple：Yes.
Old Chen：Let me teach you a recipe.
Apple：Go ahead.
Old Chen：I'll write it down for you.

Sound of pencil writing.

Apple：Oh, this combination, Collins glass right?
Old Chen：Right.
Apple：Where'd you get this recipe?
Old Chen：A foreigner made it recently, now it's a modern classic.
Apple：Modern classic... what's it called?
Old Chen：__Second Serve__.
Apple：Don't have fino, can I use this? Manzanilla sherry.
Old Chen：Even better.

Bottle clinks on bar.

Old Chen：Yesterday didn't finish talking. You said you'd ask her in person, did the girl come?
Apple：No, we'll see. Can't figure out what she means.
Old Chen：May I ask, is there something between you two?
Apple：... This... how do you define something?
Old Chen：You know in your heart if there's something.
Apple：Then... how do I tell you?
Old Chen：I don't remember the person, but she looks pretty in the photo. How to say, someone this pretty has the right to have secrets, understand?
Apple：I find you talk very much like a father today.
Old Chen：Hey now, don't take offense. Us older folks are more direct—it's okay, if you don't want to say, you don't have to tell me, haha.
Apple：I really don't know how to say it.`
    },
    {
        id: 'log_ling_20221109',
        searchId: 'Lynn_20221109',
        title: 'Lynn_20221109',
        locked: true,
        content: `Ice clinking in shaker, liquid poured into glass.

__Apple__：Try it, and look at this while you're at it.

Sound of sipping.

__Lynn__：Pretty good, but what do you want me to see?
Apple：The film I just mentioned.
Lynn：And then?
Apple：Look at this person, doesn't it look like you?

Brief pause.

Lynn：A bit, but the hairstyle doesn't match.
Apple：Just a bit?
Lynn：What's wrong? What exactly are you suspicious of?
Apple：I'm not suspicious of anything, just asking.
Lynn：Make me the next drink.
Apple：Okay, making it.
Lynn：I want to drink... can I use my phone?
Apple：Go ahead.

Brief pause.

Lynn：Let me try this... you found an Easter egg! This is a random recipe tool, for bartenders who don't know what to make—
Apple：Wait, how do you know about this thing?
Lynn：Please feel the luck!—From Apple King who doesn't like eating apples.
Apple：How did you find this?
Lynn：Let me random it... amaretto, averna, cynar, maraschino, how about this?
Apple：All liqueurs, can it be good?
Lynn：Then this one? Gin, dandelion bitters, peated whisky, plus Montenegro. This sounds good. Make me this.
Apple：Proportions?
Lynn：You decide.
Apple：Don't blame me if it's not good.
Lynn：As long as you put alcohol in it, it won't taste bad.

Brief silence.

Lynn：So all drinks this tool generates are called the same name, dram something.
Apple：I don't know, never thought about it.
Lynn：You still look unhappy.
Apple：Because you clearly knew I write a blog and never told me.
Lynn：I knew it was your little secret, afraid telling you would make you uncomfortable. Honestly, I found this bar because I found this blog, found it interesting, and followed your clues to find this place.
Apple：Nonsense, I never mentioned the bar's location in the blog.
Lynn：You did, but you've written so many about drinks, you forgot. Didn't you say under the search box yourself, there must be 9,000 cocktail recipes if not 10,000, right? Forgetting some recipes is very normal. By the way, I really like your shaker button design, just the background color is a bit ugly, haha.
Apple：... I never got around to removing that background color, didn't think a second person would see this thing. How did you figure it out?
Lynn：None of your business. I didn't just hang out here; I secretly visited other bars too. I'd make up random names, tell them it was some modern classic recipe I'd had that was delicious. Forced the bartenders to push their limits.
Apple：You're a demon.
Lynn：I'll take that as a compliment.

Brief silence, piano fills the quiet air, mingling with ice and spirits.

Apple：Try it.
Lynn：You know what, this is really delicious.
Apple：Is it?
Lynn：Delicious, so delicious it should have its own name.
Apple：What should it be called?
Lynn：What's this song playing?
Apple：Let me check... it's called __My Wild Irish Rose__.
Lynn：Sounds like a good name, what do you think? For a drink you made for me.
Apple：... Then let's call it that.
Lynn：So, can you forgive me now and promise not to be passive-aggressive anymore?
Apple：I wasn't being...`
    },
    {
        id: 'log_awen_3',
        searchId: 'Vin_20221231',
        title: 'Vin_20221231',
        locked: true,
        content: `Quiet bar, background music is warm jazz piano. Sound of door opening.

__Vin__：Yo, so quiet, is this the prelude to closing down?
__Apple__：Why are you here?
Vin：Wanted to celebrate New Year's Eve, who knew there's not a single person. What a downer! Can't stay in this city anymore.
Apple：Then move? Besides, look at the time, it's hours before New Year's. Young people are still eating elsewhere. Who's like you, old man, has a couple drinks and has to go home to sleep.
Vin：Whoever doesn't stay until you close today is a punk.
Apple：No need Brother Vin, I didn't provoke you.
Vin：Alright, enough nonsense, hurry up and get me a drink. What interesting things have you made recently? Make one to drink.
Apple：Already making it for you.
Vin：What you making?
Apple：You'll know when you taste it.

Ice and spirits clinking.

Apple：Well, how does it taste?
Vin：Whose recipe is this, what's it called?
Apple：Don't ask that yet, how does it taste?
Vin：Did __Monty__ come recently?
Apple：No, he's never coming again.
Vin：I'm confused, because this drink tastes like something he'd like.
Apple：Hey, this drink has nothing to do with him... someone else inspired me.
Vin：Someone else, new girl?
Apple：Don't girl girl all the time, can't you see? This bar isn't like before.
Vin：So what, we talked like this at bars before.
Apple：Smell's too strong, can't take it.
Vin：Really boring.

Brief silence.

Vin：Tell me, you're not still messing around with that person, are you?
Apple：Who?
Vin：You know who I mean.
Apple：What do you mean messing around? She comes to drink occasionally.
Vin：Fine fine, you love to act, I won't stop you, but I remember she has a boyfriend.
Apple：What do you mean?
Vin：Yeah, her first time came was brought by her boyfriend.
Apple：You mean my first week working here?
Vin：Way earlier, several years ago, when you were still pulling girls' hair in class.
Apple：What do you mean, she went to the old bar?
Vin：You didn't know?
Apple：But she said she came to this bar because... anyway first time meeting me was her first time here.
Vin：Then either I recognized the wrong person, or you got fooled.
Apple：Must be your old eyes got it wrong.
Vin：It's okay, even if young people get fooled they won't lose much haha.

Sound of washing bartending tools.

Apple：Regardless of whether you and I are talking about the same person, did you know the so-called "boyfriend" who brought her to the old bar?
Vin：Think his name was __Liu Fei__ or __Li Fei__, always came with another guy called __Dabai__. But after I became a regular, these people never appeared again.
Apple：Dabai? That name sounds familiar, who mentioned it...
Vin：You find it familiar? Impossible, I heard that guy Fei died years ago from illness.
Apple：Died...

Brief silence.

Apple：Oh right, have you seen this thing?

Book placed on bar, someone starts flipping through.

Vin：Isn't this the underground magazine they printed for fun? Where did you dig this up?
Apple：Someone named __Old Chen__ brought it—
Vin：Damn, dirty thing!

Book thrown on bar.

Apple：What's wrong, you know him?
Vin：You have the nerve to say I'm greasy and disgusting? This guy isn't way more disgusting than me!
Apple：You two... not much difference. Anyway, fine. That day he mentioned this Dabai, unfortunately the magazine fell apart, couldn't find what he wrote.
Vin：Don't know, don't care.
Apple：—Recently someone named __Echo__ also came, said he also went to the old bar...
Vin：Enough enough, stop with these old calendars, hurry make me a drink.
Apple：Well then, Old Chen shared a recipe, I'll make it for you—
Vin：Stop stop stop, don't disgust me, okay? Make me a Perfect Manhattan.
Apple：What's Perfect Manhattan?
Vin：__Perfect Manhattan__.
Apple：Don't know it.
Vin：Aren't you a college student? Don't even know this.
Apple：Too lazy to deal with you.

Ice clinking.

Apple：Done, drink up.
Vin：Here here, let me taste... mm, this drink should be a variant, called Imperfect Manhattan, not even close.
Apple：You have a drink so drink it.
Vin：Hahaha, love seeing you get mad. Oh, I just thought of something.
Apple：What?
Vin：Take that painting down.
Apple：Why?
Vin：You take it down, then I'll tell you.
Apple：What for, it's all dusty.

Brief pause.

Apple：Give me a hand.
Vin：Like this, flip it over, put it on the bar... right, that's it.
Apple：What next? What for?

Sound of metal parts rubbing.

Apple：Why you taking it apart?
Vin：I remember they used to hide something in this... right, this is it.
Apple：What's this?
Vin：Probably some drunken bet, not important, but look at its back.
Apple：This is... what is this?
Vin：Looks like my brain isn't ruined by drinking. I remember someone wrote a novel with Dabai as the protagonist, this is it.`
    },
    {
        id: 'xiaoshu_20221224',
        searchId: 'Echo_20221224',
        title: 'Echo_20221224',
        locked: true,
        content: `Two sounds of door opening, footsteps one after another.

__Echo__：Do you smoke?
__Apple__：No, I'll just keep you company.
Echo：Thanks, it's freezing out here.

Lighter wheel friction.

Apple：We were just mid-conversation, speaking of which, last time I kept someone company smoking here was __Monty__.
Echo：That's also a kind of fate, am I using that word too much today?
Apple：Not at all, really fate. So many bars in this city, you just happened to find this one. Then I showed __Old Mo__'s film, you picked one at random and found yourself in it.
Echo：Yeah, I quit drinking years ago. Today I just wanted to find a place to sit, have a soda water, who knew I'd walk into a place I used to go to every day again—though it moved.
Apple：Oh, you already quit drinking. Wish I'd known, wouldn't have recommended that drink.
Echo：That drink was delicious, worth breaking the rule for. Called... __second serve__, right?
Apple：__Second Serve__.
Echo：I'll remember, even though I don't know any __Old Chen__, haha.
Apple：And you also helped me solve a mystery.
Echo：Did I solve it? Not really, can only say... one interpretation.
Apple：Actually when we first checked these films we felt something was off, but never...
Echo：But never put together those scratched film strips to watch, right?
Apple：We can actually see a figure.
Echo：Depends whether you believe these things.
Apple：I don't know.
Echo：Because I believe it myself. And people who don't believe will think there's no figure, it's all our wishful imagination, hahaha.
Apple：You mean... you believe in ghosts and spirits?

Door opening sound. Footsteps from far to near, then near to far.
Seems someone left the bar.

Echo：No no, more complex than that, and more specific.
Apple：Then what is it?
Echo：You can imagine the timeline we're in as an infinitely long, straight highway—
Apple：Highway...
Echo：Right, actually this road has countless intersections leading to narrow, dim side paths and such. But we're on the highway, the "speed" is too fast, we don't notice these small roads at all, until the invention of camera technology. What you saw that day was actually such a side path.
Apple：I don't understand, you mean I entered an alternate dimension?
Echo：These spaces were always there, you just happened to observe it that day.
Apple：Continue.
Echo：Theoretically, people on the highway can't enter the path, and "people" in the path can't come out. But... can't rule out some exceptional situations where people in the path, wanting to squeeze into the "highway", once they give up their position, actually cause people on the highway to fall into the "path".
Apple：You mean we exist in what seems continuous time but actually contains countless ruptures, some people are torn apart into an untouchable form, then stuffed into different "frames".
Echo：Something like that.
Apple：This sounds way too mystical. Like...
Echo：Like merging sci-fi and supernatural? Hahaha.
Apple：Right, exactly.
Echo：So I said, those who believe believe, those who don't won't affect their lives.
Apple：I understand. Some customers do suddenly stop appearing, but Old Mo really did disappear.
Echo：From what I know, yes. Anyway Monty even went to his hometown looking for him. He doesn't believe a person can just vanish without a trace.
Apple：Did you talk to him about this? Your theory.
Echo：Yes, he thought I was drunk. Anyway to that group of people, the old me was like a fortune teller. Maybe they even thought I'd be the one something would happen to first.
Apple：Then... according to what you're saying, is there any way to reverse this?
Echo：Return to our spacetime from the side path?
Apple：Yes. Earlier you only had me find all the problematic films, but only put together some of them. You said, what if I put all of them together?
Echo：Don't know, but if it happened... probably something very bad.
Apple：Because if someone comes out, someone has to go in?
Echo：Have you thought that existing in a continuous spacetime isn't necessarily good, and conversely, being trapped somewhere isn't necessarily all bad, like those pure nostalgia lovers... you don't believe what I'm saying?
Apple：Can't quite say that, haha.
Echo：Then you can also think I'm drunk, we're just chatting after drinks.
Apple：Of course just chatting, better than being bored.
Echo：So, if I want to drink, what will you make me today?
Apple：Don't know about other drinks, __Hot Toddy__ I can make right now. Just straight whisky with hot water.
Echo：Isn't that just whisky with hot water? Monty used to drink it like this often. But I just realized this drink actually has a name.
Apple：Don't be so sentimental. Didn't you just say maybe right now Monty is at another bar in this city, drinking exactly the same thing.
Echo：Like you and the ancients, looking at the same moon.`
    },
    {
        id: 'mengqi_20201218',
        searchId: 'Monty_20201218',
        title: 'Monty_20201218',
        locked: true,
        content: `Sound of glass breaking.
Laughter immediately follows.

__Apple__：Sorry, broke two more glasses in front of you. Ha... hand slipped.
__Monty__：You're drunk.
Apple：Blame your recipe for being so magical. I couldn't resist, drank three in a row.
Monty：I think it's just average.
Apple：Isn't it weird? The things you usually drink are like slop, how does your brain store such clean recipes?
Monty：Because whether it's good or not doesn't matter to me.
Apple：Ha, got it. You just need alcohol, don't need the bartender.
Monty：Also not right. Actually I need people. I need to stare at something, confirm it's still flowing, still changing... see, I never drink alone at home.
Apple：Right, never drink at home, or we'd all starve.
Monty：... do you remember what you told me two hours ago?
Apple：I don't remember. Haha, I don't know what I said five minutes ago.
Monty：You said you suddenly don't understand why people spend twice the money to get drunk at bars. You said you're having a career crisis, feel like you can't hold on.
Apple：What a ridiculous person I am. Only worked two months, this counts as career crisis?
Monty：This emotion is common. I've seen quite a few beginners who start doubting the meaning of their existence because some regular they like stopped coming.
Apple：... how do you know I only feel bored because someone didn't come?
Monty：I could tell that day. You like that girl.
Apple：That obvious? I thought I hid it well...
Monty：But I need to remind you, her purpose for approaching you might not be so pure.
Apple：Why think so badly of people? Besides she hasn't come back, I wish she did have a purpose...
Monty：You misunderstood, I mean—
Apple：Stop. When she actually appears someday, then come give me lessons.
Monty：True. How about this, I'll give you a recipe. Maybe you can make it for her later.
Apple：Will she like it?
Monty：She will. Trust me.
Apple：What's this drink called?
Monty：__Perseverance Cocktail__.
Apple：Don't understand. Just write it down.

Sound of pencil on coaster.

Monty：Either way, you'll definitely get through this...
Apple：What?
Monty：Nothing, talking to myself.`
    },
    {
        id: 'ling_20231103',
        searchId: 'Lynn_20231103',
        title: 'Lynn_20231103',
        locked: true,
        content: `Bar environment clean.
Sound of door opening.
Footsteps one after another, from far to near.

Lynn：Hey.
Apple：You finally came, I've been waiting for you. I just prepared a new drink—eh? Two of you?
Lynn：Right, my friend.
Apple：Please... please sit.
Lynn：It's okay, we won't sit.
Apple：Eh?
Lynn：—We were just drinking at another bar, suddenly remembered, so I had him use your Easter egg.
Apple：Ah, is that so...
Lynn：Anyway we tried several drinks, some good some bad... but the Easter egg is really interesting, so brought him to see the creator.
Apple：I understand...
Lynn：How is it, not many people today?
Apple：Relatively few.
Lynn：We were just at that bar, so many people, so noisy... anyway we just stopped by to see you.
Apple：Okay... really won't have a drink? I already made one for you in advance.
Lynn：Really already drunk, you drink it for me.
Apple：Want some water?
Lynn：Too late, we're going back. See you another time.
Apple：See you another time.

Footsteps one after another, from near to far.`
    },
    {
        id: 'awen_20231103',
        searchId: 'Vin_20231103',
        title: 'Vin_20231103',
        locked: true,
        content: `Quiet piano music.
Door opening sound.

Vin：It's okay, it's me.
Apple：I saw it was you.
Vin：So cold... are you waiting for someone?
Apple：No.
Vin：Oh, I saw you pour a finished short drink into beer.
Apple：Was going to make a new drink, decided to mix it with stout instead.

Brief silence.

Apple：What will you have? I'll make it.
Vin：I'll have what's in your hand.
Apple：I haven't made it before, not sure how it tastes.
Vin：I'll have this, it's fine, won't make it hard for you.

Sound of glass being pushed on bar.
Sipping sound.

Vin：It's good. Want to try?
Apple：It's okay, you drink it.
Vin：Try it, might become your signature product in the future.
Apple：That would be quite dramatic, even absurd.
Vin：How so?
Apple：Never mind.

Sipping sound.

Apple：Mm, not bad.
Vin：Kid's so modest! Alright, pour yourself whatever you want, my treat today.
Apple：What's the occasion? Suddenly treating me.
Vin：I'm moving, came to say goodbye.
Apple：Moving? So sudden?
Vin：Yeah, well, not really. I've always wanted to change cities, you know that.
Apple：I thought you were just talk. Where to?
Vin：Home first, see where to next spring. Anyway, old friends are scattering, I should look forward too.
Apple：When do you leave?
Vin：Done packing, shipping tomorrow, leaving the day after.
Apple：Then—should I call Ash, get him to come in?
Vin：No need, not worth it. Just chatting with you is fine.
Apple：I thought you two reconciled...
Vin：Can't say we didn't, can't say we did.
Apple：What do you mean?
Vin：Hard to explain.
Apple：But you've known each other for years, I've barely been here long.
Vin：It just faded, you know? Faded to the point where even a goodbye is unnecessary. Just thinking about that scene is gross.
Apple：I think I get it. Ash once said customers change in waves, and he has to update himself with the new regulars. Once updated, the old stuff gets blurry, forgotten.
Vin：That's why I say, he looks nice but is actually cruel. Maybe that personality is born for this job.
Apple：He comes in less now, leaves it all to me.
Vin：Hang in there. If I come back to visit, I want to drink this again. How about giving it a name?
Apple：Don't worry, I'll remember. But maybe you should drink a __Steph__ then, since that was the first drink I made you.
Vin：Still holding a grudge? Actually you made it fine, but we just met back then, and it was your first day, I couldn't look easy to handle, you know?
Apple：So you were pranking me.
Vin：Just a joke. Come on, bring out those reels from __Old Mo__, let me take a last look at the old days.

Sound of a bag being placed on the bar.

Vin：Ten years gone in a flash, look how young I was.
Apple：You can look at this too.
Vin：What is it?
Apple：That year I stole your key and took photos at the old bar.
Vin：I knew it.
Apple：Look at this.

Sound of thin sheets sliding.

Apple：See, if you stack these frames with white circles, does it look like a silhouette?
Vin：What, you also think Old Mo is trapped in these films?
Apple：Why "also"?
Vin：Forgot, probably heard someone mention it. Let me see...

Sheets sliding.

Apple：Hey, you can't stack them all, otherwise...
Vin：Otherwise what? Look, you have to stack them all to look like a person.
Apple：N-nothing.
Vin：Does look a bit like one.

Brief silence.

Vin：Hey! Look at me, old and confused, almost fell for your ghost story.
Apple：I'm too lazy to trick you.
Vin：Alright, put them away.

Bag being packed.

Apple：Speaking of which, seen __Monty__ lately? Did you tell him your plans?
Vin：If there's a chance, or you tell him.
Apple：That'll be hard.
Vin：Doesn't matter—honestly, don't dwell on these old folks, there'll be new customers.
Apple：I have new customers.
Vin：Better have. Alright, gotta go back and pack. If I have time tomorrow I'll come again.
Apple：I'll walk you out.
Vin：No need. The hills remain green and the waters flow long—see you around.
Apple：See you tomorrow.

Stool moving, footsteps receding.

Vin：By the way.
Apple：What?
Vin：When I came in, I saw two people walking out.
Apple：Oh, yeah?
Vin：Remember asking who wrote that poem signed with an exclamation mark at the old bar?
Apple：I remember.
Vin：Looked a lot like that person.
Apple：What? You mean __Dabai__? But wasn't he... wait, isn't he missing?
Vin：Maybe I saw wrong. See you tomorrow.
Apple：Wait—

Door opens.
Rapid footsteps receding.

Apple：Huh? Where'd he go?

Brief silence.

Apple：Are you still there?

The bar returns to silence.
The frozen piano music continues to play endlessly.`
    },
];

export const BLOG_ENTRIES: BlogEntry[] = [
    {
        id: 'intro',
        password: '',
        title: 'Home',
        locked: false,
        content: `Dear friend, this is a private blog. If you want to learn about cocktails, enter the drink name to search. If you just want to peek into my secrets, please turn around and go watch variety shows instead.`
    },
    {
        id: 'boiler_maker',
        password: 'boiler maker',
        title: 'Boiler Maker',
        locked: true,
        content: `Boiler Maker 
    30ml Tanqueray Gin
    400ml Pale Ale

Fill a shot glass with gin and drop it into a glass of beer. Who would have thought such a simple method could actually work so well? The botanical notes of gin enhance the hoppy aroma of the pale ale, making each sip feel like strolling through a botanical garden...

Come to think of it, this should be my first bartending study note. If you happened to find this place, you've discovered my secret - my bartending career actually started with a beer cocktail, haha!

Anyway, __there's something else worth recording today__. Learning that I got the job, regular customer __Vin__ was also happy. Knowing I'm a photography student, he mentioned there happens to be an 8mm camera at the bar that's "hard to deal with," and suggested the owner __Ash__ let me use it.

This is a Bolex 8mm camera! Exciting! If the boss agrees, I'll have a chance to use it to shoot some film footage of my bartending life, maybe even make a documentary later.

Oh right, about the documentary, I already have an idea. To showcase the repetitive, cyclical nature of bar life, __I'm going to scramble all the film reels__, making the whole story look like the same day repeating over and over! Only I will know when each reel was actually filmed.

💡 Update:

Today, I poured a cocktail meant for a customer into stout beer, and __Vin__ happened to see the process. He said I made a boiler maker twist.

Looking back, it's been __three years__ since I first tried this drink.

Delicious. Vin said it was delicious too.

But so what?`
    },
    {
        id: 'martini',
        password: '50/50 martini',
        title: '50/50 Martini',
        locked: true,
        content: `50 / 50 Martini
    Dolin Dry Vermouth 25ml
    La Quintinye Dry Vermouth 15ml
    Tanqueray Gin 40ml
    Fernet Hunter 1 / 2 barspoon
    Lemon Juice 1 drop

I never liked Dry Martini. After making one for __Vin__ and getting criticized, I disliked it even more.

But this one is different. 50/50 refers to two ingredients mixed in a one-to-one ratio. According to Vin, this is actually closer to how the drink was when it was first invented. I don't know, it tastes completely different to me.

__Just two days__ after learning it, a regular named __Monty__ ordered this drink. After making it he was quite satisfied—of course it's the boss's recipe—he said it tastes more like another classic cocktail called "__Bamboo__," which was reportedly created after repeated adjustments by a regular customer, with other ingredients added, so it can't strictly be called 50/50.

Interesting, I never really talked to Monty before. Who knew he'd know about the thing I'm curious about?

By the way, I got the camera. Posting tips here so I don't forget.`,
        stickyNote: `1. Film running unevenly may be due to excessive reel tension.
2. When shooting outdoors in bright light: Don't rely solely on auto exposure, be sure to use the built-in daylight filter to ensure colors don't turn too blue or washed out.
3. Pay attention to winding frequency and force: The mechanical motor typically only shoots about 20-30 seconds before needing to be wound again.
4. Avoid breathing on the lens to clean it: Moisture from your breath will accelerate coating degradation.
5. Lens flare in footage is often caused by scratches on the lens.`
    },
    {
        id: 'steph',
        password: 'steph',
        title: 'Steph',
        locked: true,
        content: `Steph
    Tanqueray Gin 40ml
    Glen Grant Scotch Whisky 10ml
    Dolin Dry Vermouth 20ml
    Suze 12ml
    Fernet Hunter 3ml

Some customers here love this drink to a fanatical degree, even claiming they'll never find a more delicious cocktail. I remain skeptical, never really tasted what's so great about it.

However, messing it up for __Vin__ on my first day and having it sent back made me seriously doubt whether I should even write it in my blog. If you happen to see this page, I strongly suggest skipping this one. Who knows, maybe the recipe itself is flawed!

💡 Update: Okay, I'm updating again. After being patiently and carefully guided by a customer today, I remade it and it actually worked? Although I personally still can't taste its mystery, the customer was very satisfied—maybe he was just comforting me! Anyway, he said next time he comes, he'll teach me a cocktail that all spirit lovers will adore. He said it's called __Francis Albert__!

Today he mentioned that long-missing customer, encouraging me to do something with the film he left behind. Actually, I've already carefully examined all these old, brittle film reels and marked all the usable parts __in a completely symmetrical way__ (maybe all usable?).

How to put it? Being able to utilize footage shot by others years ago will give my documentary a strong sense of temporal dislocation, which is perfect! Moreover, this customer has already appeared in images from two different time periods. When he visits again, I need to talk to him about my documentary plan!`
    },
    {
        id: 'francis_albert',
        password: 'francis albert',
        title: 'Francis Albert',
        locked: true,
        content: `Francis Albert
    Tanqueray Gin 30ml
    Wild Turkey Rare Breed Whiskey 28ml
    Lemon Peel

__Monty__ was indeed sick. A whole week passed before he finally appeared again on __the day before Halloween__. During this time I chatted with other regulars about this drink. They say __Ash__ has always been known for this cocktail, but looking at just the recipe, he simply follows the classic method completely.

When Monty reappeared, he kept his promise and told me Ash's secret for making this drink. Turns out the trick is putting in slightly less whiskey. I tried it, my mind full of "of course" thoughts: Rich yet crisp citrus and pineapple aromas, the unpleasant tangled bark smell of bourbon whiskey is diluted by the botanical notes of gin. Truly marvelous! According to Monty, this was also the missing customer's favorite.

But where did he go?

💡 Update: On my first day off, I came back to the bar and ordered a __Francis Albert__. It felt good to be a customer again.

I just noticed that annoying guy also complains about Ash's drinks, but Ash remains completely expressionless. Seeing my amazement, __Lynn__ said selective deafness is a necessary skill for bartenders, told me to learn it.

ps: Lynn is a new friend, new customer, but we talked all night.
How to put it, I'm gradually getting tired of the old bar's feuds.`
    },
    {
        id: 'whisky_sour',
        password: 'whisky sour',
        title: 'Whisky Sour',
        locked: true,
        content: `Whisky Sour
    Buffalo Trace 40ml
    Manzanilla Sherry 10ml
    Rich Syrup 10ml
    Lemon Juice 20ml

Made two drinks __one evening__, got two completely different reviews. Taking out part of the whiskey from the classic recipe and replacing it with sherry that has more fermented and fruity notes indeed gives this classic many subtle flavors. Plum? Apple? Maybe.

Watching __Monty__ drink, __Vin__ insisted I make him one, then drank every sip with a face full of displeasure. Really don't know why he always has to be picking on me—I should say, tonight he's been finding fault with everyone!

But thinking calmly, even unpleasantness is all part of bar operations, isn't it? Since it's daily life, it's worth recording.`
    },
    {
        id: 'little_italy',
        password: 'little italy',
        title: 'Little Italy',
        locked: true,
        content: `Little Italy
    Knob Creek Rye 50ml
    Vermouth Rosso 20ml
    Cynar 15ml

Is this a __Boulevardier__ variant? Tastes about the same, so I never took it seriously, never recorded it in my blog.

Looking back, the first time I tasted this drink was on my first day off working here. An unfamiliar girl ordered it and invited me to try it.

Perhaps the common quality of being newcomers attracted us to each other? Anyway, I remember we talked a lot that night, seemed quite compatible, so compatible I thought she'd appear here every week. However, just when I thought I'd finally have my own regular customer, she never came again.

Until today.

__Yesterday was just past Valentine's Day__, I thought the bar would be so quiet there wouldn't be a single person. Who knew she'd finally reappear, even remembering the promise from __a year and a half ago__. But times have changed, I've long forgotten its correct flavor and recipe—and most importantly, after experiencing those things, these past few days I don't care whether a drink tastes good or not, I just don’t have it in me.`
    },
    {
        id: 'jam_1030',
        password: 'jam 10.30',
        title: 'Jam 10.30',
        locked: true,
        content: `Jam 10.30
    Sotol 45ml
    Bourbon 15ml
    Caffo Amaro 12ml
    Amontillado Sherry 10ml
    Creme De Cassis 5ml / Chinachina 5ml

Sotol is a fairly rare spirit from northern Mexico. Don't know when __Ash__ suddenly became interested in it, these past two months he's made several new recipes with it. Don't understand, he hadn't had enthusiasm for new recipes in a long time, and recently business isn't great, sometimes regulars would rather just drink beer.

Don't know if it's my problem. Ever since __Monty__ stopped coming, others have been treating my service and drinks with a kind of politeness and fake smile, as if even when I don't do well, they're willing to tolerate me. This feeling is awkward. Can't they just say it's not good? Or maybe it's something else entirely?

Let me be blunt. Haven't filmed lately because I wasn't in the mood, so I threw the film backpack in the warehouse. A few days ago was my __one-year work anniversary__, couldn't not film. But when I dug out the backpack, I found the film inside had been tampered with. Asked Ash and he was evasive, only __Vin__ would tell the truth. Basically, they still think Monty's accident is related to me going to the old bar and encountering something unclean. Probably why they wanted to find and throw away that reel.

I'm not that stupid, I never put that reel in the backpack, it's not in the numbering system either.`
    },
    {
        id: 'xyz',
        password: 'xyz',
        title: 'XYZ',
        locked: true,
        content: `XYZ
    White Rum 35ml
    Pisco 5ml
    Spanish Gin 2ml
    Lime 20ml
    Syrup 5ml
    Cointreau 10ml

Every year __April 25th__ is the bar's __anniversary__. On this day the bar doesn't operate commercially, only treats regulars, and of course no cocktails. __Ash__ will open a dozen bottles of whisky for everyone to drink. I hear every year many people get drunk on this day, nothing new. But to seriously make cocktails on this day, that's quite rare. This year's __anniversary__, I made a drink for __Monty__. __XYZ__, adding a bit of pisco and Spanish gin, apparently his own recipe. I tasted a bit of the liquor left on the shaker lid, very fragrant, but beyond that, I have no memory of that day.

💡 Update: Monty hasn't come in a long time. __Vin__ reminded me today and I realized the reason he insisted on having an __XYZ__ that day was actually this. A cocktail that always exists as the last drink, __XYZ__, has now also become the last drink Monty had at this bar.

A sigh.`
    },
    {
        id: 'goooooose',
        password: 'goooooose',
        title: 'Goooooose',
        locked: true,
        content: `Goooooose
    Shochu 50ml
    White Rum 20ml
    Italicus 10ml
    Vermouth Dry 15ml
    Lemon Peel

Found something new going through those old recipes, but since the bar hasn't had shochu for a long time, it wasn't until __Lichun__ (Start of Spring) when someone brought a bottle as a gift that I finally tried making it once. The result was surprisingly delicious. Beneath the appearance of low alcohol and fresh character, it retains space for variation...

I asked __Ash__ where this recipe came from and why it's called this. He first said maybe one day when everyone was having a good time, some customer came in and made it, maybe there happened to be shochu. Everyone thought it was good so they wrote it down, but because they were too happy, everyone got drunk, and completely forgot about it the next day. Anyway, no one has really liked this drink. Maybe it should just be forgotten.

Anyway Ash said a lot, but I was really happy drinking today, don't remember what he said.`
    },
    {
        id: 'exclamation',
        password: '!',
        title: '! (Daikanjou)',
        locked: true,
        content: `!
    Knob Creeks Rye Whiskey 30ml
    Tanqueray Gin 30ml
    Singani 10ml
    Gran Classico 10ml
    Spanish Bitters 2dash

__Ash__ skillfully operated this drink, using a dusty bottle from the back of the cabinet, the last drops of Bolivian grape distillate singani.

Before tonight I never knew this liquor existed, didn't know the bar still had a tiny bit left, and don't know where I'd go to find this liquor to replicate this recipe.

I must say, (if there's a chance to find singani), __Francis Albert__ lovers should try this drink, because in terms of aroma and complexity, it's like a seductive version of FA.

💡 Update: Got new intel today! Someone had me make this drink with regular pisco, and clearly stated the recipe, telling me this drink is called "__Daikanjou__" (Great Reckoning). He also said, because this drink was originally a __Francis Albert__ variant, and the latter is related to __Frank Sinatra__, the variant used the name of an album by Japanese jazz pianist __Shoji Aketagawa__.

I don't know if this is coincidence or some cultural evolution, but considering Ash was vague about it, while this source who was supposedly a regular many years ago spoke with such detail, I'm now more inclined to believe he simply stole this recipe from somewhere else! Anyway, the source calls himself __Old Chen__. We chatted a lot. He said he personally experienced the first novel competition held by the bar's writing group, had vivid impressions of the missing __Old Mo__ and others. I improvised a drink and __named it after that magazine sample book__.

Whether you say I'm trying to show the bar's continuity or forcibly inserting myself into things, fundamentally I really don't care about these past events anymore, listening to stories is exhausting!`
    },
    {
        id: 'are_bats_rats',
        password: 'are bats rats',
        title: 'Are Bats Rats',
        locked: true,
        content: `Are Bats Rats
__aka Jam 11.05__
Glengrant 45ml
    Fernet Branca 10ml
    Vermouth Bianco 25ml

After working at a bar for __over two years__, I finally made my first original cocktail.

Mainly because this bar has too many of its own cocktail recipes. Sometimes when I'm cleaning, I find recipes written on napkins from the bar's crevices. You know this place just moved here less than three years ago, and these recipes weren't even left by __Ash__.

It—I mean this bar, is itself like a cow that produces and summarizes recipes.

And my drink can't even be called original. As a Hanky Panky twist, I believe this combination has been made thousands of times.

But guess what, the effect is actually pretty good. So why hasn't anyone "registered" it as some classic cocktail?

Can't understand.
Can't understand people.
Can't understand people who drink.
Can't understand women who drink.`
    },
    {
        id: 'second_serve',
        password: 'second serve',
        title: 'Second Serve',
        locked: true,
        content: `Second Serve
    Montenegro 30ml
    Manzanilla Sherry 30ml
    Monin Cane Syrup 10ml
    Lemon Juice 20ml
    Soda 60ml

Never tasted the finished product. First time making it I was too lazy to taste. Second time—today, I only tasted a bit when pre-mixing in the shaker. Sour, sweet, bitter, fermented notes. Not bad.

In fact, when you don't know how to start a conversation, using a drink is indeed a method. __Three days ago__ a customer recommended this recipe; this person claims to be an __old bar__ customer; talked about things at the __old bar__ before, so we looked at the film __Old Mo__ left behind, like this one.

Then show the photos to the person involved, __her__, see what __she__ has to say.

💡 Update: Without realizing it, this drink seems to become a key to unlocking some lost memories. After __Old Chen__, within half a year two more old customers visited again—though to me they're complete newcomers. Without exception I made this drink for them, and they naturally talked about the past.

How to put it. Actually recently, for certain reasons (or a certain person), I both care and don't care about this bar's history. Both feelings exist simultaneously. On one hand I feel I don't need to care about things unrelated to me, should care about people in the present. On the other hand, I feel I need to care, because even people in the present might be connected to that past. Am I right?

But fundamentally, I've already confusedly become part of this bar. No matter what, I can't approach these things with the curious detachment I had when I first arrived.

ps: These two old customers are interesting too. After drinking this, they each told me strange things. One was okay, the other—hey, is it really okay to say these things on __Christmas Eve__?`
    },
    {
        id: 'my_wild_irish_rose',
        password: 'my wild irish rose',
        title: 'My Wild Irish Rose',
        locked: true,
        content: `My Wild Irish Rose
    Tanqueray Gin 40ml
    Dandelion Bitters 5dash
Montenegro 15ml
Islay Mist 10ml
Tanqueray No.10 10ml

Damn, secret's been discovered!

Feels like someone stole my treasure (not really). I originally thought no one would find this place, but even the Easter egg was discovered. Good thing the first drink I randomly threw together was approved, otherwise it would be too embarrassing.

Anyway, this drink got its name! A piece by Keith Jarrett. Considering this is a martini with licorice and rose aromas, this name is really fitting.

[IMAGE:/cat_decoration.png]

💡 Update: Well, even __Vin__ praised this drink endlessly. In my memory, he never complimented me before his ban. This time Vin appeared at the bar again when Ash wasn't around, didn't even ask me. This was on __New Year's Eve__, the busiest time of year for the bar, 99.9% of the time Ash would be here. I suspect they've been privately coordinating schedules to avoid awkwardness.

Or maybe, he wants to reconcile?`
    },
    {
        id: 'perfect_manhattan',
        password: 'perfect manhattan',
        title: 'Perfect Manhattan',
        locked: true,
        content: `Perfect Manhattan
    Knob Creek Rye 60ml
    Carpano Punt E Mes Vermouth 15ml
    Dolin Dry Vermouth 15ml
    Orange Bitters 3 Dash

Imperfect is imperfect. Anyway, the remaining half glass, after sitting at room temperature for over an hour, I still found it delicious. Who could have thought __Vin__ would get drunk after just a glass and a half, even in my first year at the bar, he had at least six drinks minimum every day.

Is this aging?

Don't know why, I feel this moment is especially worth filming.
__Continue using the numbering system__, hehe :)`
    },
    {
        id: 'hot_toddy',
        password: 'hot toddy',
        title: 'Hot Toddy',
        locked: true,
        content: `Hot Toddy
    Whisky With Peaty Flavour 50ml
    Hot Water 180ml

I never understood. But __Monty__ always said, understand this drink as a kind of light tea. He said in Paustovsky's novels, Soviets called any beverage steeped in hot water "tea"—even if they only had dried carrots, dried beets or fireweed leaves, steeping them in hot water could be used to entertain guests.

I don't know. Monty always had an ascetic spirit, reflected in his indifference to flavor; sometimes even the opposite, deliberately pursuing a kind of blandness and roughness. But he clearly understood drinks well. When I first became a bartender, he gave me a lot of guidance, even more than __Ash__ helped me.

Only once, he had me bring out as many bottles as possible to make an extremely complex-flavored drink. That was __about three months__ into the job, when I was doubting whether I could continue. Obviously, Monty's drink wasn't for himself, but to let me appreciate the subtleties of cocktail flavors, encouraging me to persevere. Only now do I realize that was a small turning point in my career (fortunately I was obsessed with the camera then, of course I recorded this moment too).

As for him, now he seems to only need the alcohol itself.`
    },
    {
        id: 'jam_1218',
        password: 'jam 12.18',
        title: 'Jam 12.18',
        locked: true,
        content: `Jam 12.18
    Mezcal 40ml
    Rye 20ml
    Fernet Branca 10ml
    Bigallet China-China 8ml
    La Quintinye Dry Vermouth 10ml
    Spanish Bitters 3ds
    Cardamom Bitters 2ds

Still learning base spirits and liqueurs, suddenly you make me something like this, using ingredients I don't even recognize.

Really something.

But, delicious.

Don't remember much else, because I got drunk, hahaha.

Will I remember this recipe?
Doesn't matter,
just let it drift down the river of time
to some place downstream
and then I'll fish it back up.

A gift from the past,

or forever forgotten.`
    },
    {
        id: 'perseverance_cocktail',
        password: 'perseverance cocktail',
        title: 'Perseverance Cocktail',
        locked: true,
        content: `Perseverance Cocktail
    Rye 60ml
    Ramazzotti 15ml
    Dubonnet Rouge 15ml
    Sweet Vermouth 15ml
    Orange Bitters 2ds

I said, this bar is full of recipes everywhere. They're all written on coasters, then stuffed into various crevices.

In these three years of working, I've collected all the recipes I could find and put them in a small box.

But today, I actually found this thing from the gap between the fridge and the bar.

Even stranger, looking at the handwriting, this old coaster wasn't written by me or __Ash__.

No clue.

But none of this matters! What matters is the drink's taste, simply tailor-made for a certain someone.

Really such a coincidence. Next week is the __three-year anniversary__ of __her__ coming here, though only I'm unilaterally commemorating it.

But anyway, if she comes then, making her an upgraded version of __Little Italy__ might count as a surprise?`
    },
    {
        id: 'film_fan',
        password: 'filmnik!',
        title: 'filmnik!',
        locked: true,
        content: `filmnik! is a novel, authored by __Taylor Soigir__.
I've uploaded the scanned document to my blog so I can read it slowly later.
Don't know, I vaguely feel this is connected to what __Echo__ told me.`,
        attachments: [
            `filmnik!\nBy Taylor Soigir\n\n\nI've loved watching movies since I was little.\n\nThe county town where I grew up was small, and I only had one friend who watched movies with me, a guy named Dabai.\n\nAlthough we shared the same hobby, I still wasn't as fortunate as him. Dabai's love for movies was hereditary—his old man was a film fan. As a kid, I heard adults say that when "Shaolin Temple" premiered, his dad stole money from home to buy 8 consecutive tickets at the county cinema. Consecutive tickets meant the same seat number for all eight showings in one day. He bought them all, sat there, and watched it eight times straight without getting up.\n\nLater the county opened a video rental place, and his dad worked there. After that, he stopped going to cinemas. By the time every household had a TV, his dad was the first to open a disc and VHS rental shop on the main street of the county. The storefront wasn't big, but the shelves were very deep and pitch black. Even during the day he was too lazy to turn on lights—the only illumination came from a TV placed up high.\n\nI remember his old man because he sat at the wooden checkout desk by the store entrance every day, staring at the 19-inch TV overhead. I'd sneak around flipping through adult film covers on the shelves, and he wouldn't care even if I did it all day.`,
            `We watched it together two or three times, and each time at this part, Dabai would describe the rape details in as much detail as possible. I listened with horror. Although late '80s Chinese films shot a lot of "intense" stuff, such extreme visual expression still made me unable to believe it. What I couldn't understand even more was that Dabai firmly believed the director personally supervised the male actor in completing a real rape scene—meaning the rape actually happened during filming.\n\nEven as we watched more and more films and our interests evolved beyond the stimulation we liked as kids, we often argued about this film, debating whether it's necessary to use extreme methods during film creation to achieve the most realistic performance. But film was ultimately too far removed from us, so our imaginations about film creation were naturally outlandishly absurd.\n\nBy those years, the county cinema had long lost business, but disc rental shops kept multiplying. On the day I reported to high school, my mom bought me my first phone. Dabai didn't come see me off, said he had to watch the family store. Actually Dabai and I had drifted apart long ago, and our ways of viewing films had diverged increasingly. For me, film was a tool to understand the outside world. Once I was ready to actually go see that outside world, it became unimportant. But for Dabai, he'd developed a jigsaw puzzle-like compulsion for watching films. As a kid he once asked me if we could watch every film in the world. Back then I laughed at him, but by now, for him, individual films no longer existed independently—they were interconnected, piecing together to form this era. So there couldn't be any piece of the puzzle he didn't want to firmly grasp. He stopped caring about our group and instead spent more time watching films. If you ask me, his way of watching films was more like racing against the film industry.\n\nAnyway, after junior high graduation, Dabai took over his dad's business. I went away to study, and after that I might not return home even once a year. We contacted each other less and less. Our shared love of films had become an old photo recording the past, gradually yellowing and fading, not to mention our arguments about that film.`,
            `A few years ago when I called home, I'd occasionally mention Dabai and his business to my mom. She said now that fiber optics reached every household, who still rents or buys discs? Of the seven or eight video stores that used to be on that street, only Dabai's family remained. He could hold on because half his shop was used as a package pickup point. Mom said Dabai was really busy now, spending several hours every day organizing neighbors' online shopping hauls. On the phone I hummed and hawed, saying based on my understanding of him, during work breaks he'd definitely still crane his neck watching new releases on TV, or watching his VHS collection that barely plays anymore. Mom said, you still understand him—others all say he's obsessed. Then Mom asked if I still watch movies. I said, stopped long ago, don't have the patience. Mom said, good thing, it's all that thing's fault. I said, Dabai just got trapped in our small place.\n\nA few days ago after work, the security guard at the gate said someone had been waiting for me all afternoon. I looked and it was Dabai, sitting on a video recorder box, holding a DV camera filming me.\n\nThe next day I went to work as usual, leaving Dabai to rest at home. When I got home that evening, there was an extra old TV and DVD player at home. Dabai said no one's home can lack a TV, otherwise it's too much like a dorm. He'd picked up two machines from the nearby secondhand market. I didn't know whether to laugh or cry—this guy never lived in a dorm but worried about me. But I could only find a spot in the rental with him and his machines, setting up this outdated three-piece furniture set.\n\nAfter finishing I went to shower, Dabai connected the power. When I came out wrapped in a towel with a cigarette, Dabai had already put in a film. I sat next to him absent-mindedly, but soon recognized it—this was the very film that caused our argument years ago. Seeing I still remembered, Dabai was quite excited. I said I remember, but aside from certain segments, I'd long forgotten what the film was about. The version Dabai found had been restored, looking even more unfamiliar. And it was, after all, a popular genre film from over twenty years ago—watching it now revealed clichéd plot and stiff acting. I quickly tired, until a strangulation scene began, when Dabai revealed his real purpose for this visit.\n\nDabai was absolutely certain the sound in this scene was collected from real murder environment audio.\n\nDabai told me he was so certain because in his store, with nothing to do, he'd ordered and returned countless films from that era based on disc suppliers' catalogs, finally matching the film with its name. According to Dabai, this film was called "Yellow Ghost." A few years after release, director Da Shiqiu died, and the actress he believed was raped was arrested years later for organizing prostitution.\n\nSince the director's cause of death was never announced, Dabai believed the strangled victim's voice in this scene was probably the director's own voice.\n\n"Absurd, how could a director put their own dying voice into their own film?" I said.\n\nDabai reminded me that based on his memory, this edited version was already quite different from his VHS version. The footage source was now hard to trace, and those who knew the truth were either dead, imprisoned, or missing.\n\n"Any film restoration involves many people. Someone must have used the complex film collection and restoration system to add real murder scene audio to the film to convey some truth," Dabai said with certainty.\n\nBut what truth, and how to find it, he naturally had no idea. I said don't mind my bluntness, but you've lived in our county your whole life, know nothing about film restoration processes—how will you find it? The county cinema closed, who still watches movies, who still cares what these filmmakers are doing? Nearly 40-year-old Dabai got agitated, pulling out his tape that barely showed any image and waving it at me, saying he cared. This conversation ended badly. I hid in my room lying on the bed scrolling my phone as usual, and soon fell asleep. When I came out the next morning, Dabai had already left.`,
            `I folded the note into a stack, then unplugged those three machines and piled them together.\n\nA month passed. I got a call from home—Dabai's old man had a stroke. His family asked my mom to have me notify Dabai and tell him to hurry back. Only then did I realize Dabai never went home.\n\nSince then Dabai disappeared. His family was anxious, but I didn't care. I guessed he was still searching for that truth.\n\nBesides, a 40-year-old man disappearing really couldn't make me care.\n\nAnother half year passed. Realizing I couldn't avoid the topic of Dabai's disappearance, I decided to go home for Dabai's dad's funeral. After the funeral, walking on the unrecognizable old street, I couldn't help recalling the bustling childhood memories. I felt somewhat sad, and also realized that smell memories in memory could be awakened by returning to physical space, but when physical space gradually collapses, those memories gradually disappear too.\n\nLost in thought, I walked to Dabai's store entrance. The rolling door had a printed "Temporarily Closed" notice showing signs of water damage and sun bleaching. From Dabai's departure to his dad's stroke, the family was in chaos and naturally had no mind for business. But at this moment I remembered Dabai's note saying "return to the beginning."\n\nI tried pulling the rolling door—it wasn't locked. Dry sunlight shot into the pitch-black room, the smell made my mind conjure an image of myself standing before those disc covers. But what actually met my eyes were stacked package shelves, with nothing but Dabai's DV on them.\n\nI picked up the DV and flipped through—the device was almost out of battery. On the storage card I saw myself at the complex entrance, saw footage of Dabai departing, then saw Dabai back at the store watching tapes one by one. Seems after leaving me, he came back to the county but never entered his home.\n\nI closed the DV and walked deeper into the store, finally seeing the shelves full of images and dust at the corner—familiar objects. I touched the iron frame from new to rusted,  stepping on a VHS tape on the floor. I lifted my foot and discovered empty instant noodle boxes and scattered tapes all over the floor.\n\nDid Dabai discover something from the footage? Where did Dabai go to find his truth? I picked up a random tape from the floor and stuck it in the machine. The film image was blurry, no beginning or end. Sitting in this environment I felt like I'd returned to childhood. Dabai seemed never to have left, and neither had I.`,
            `I returned to my life, but the knot about Dabai couldn't be untied. At night after work, I'd stare at the black TV screen in a daze. I'd brought Dabai's DV back as a keepsake, currently piled on top of the TV. I kept thinking about that image.\\n\\nAfter messing around for a while I closed my computer and lay back on the bed operating my phone. I don't know how Dabai found these names. Resources searched by these names never matched the films we watched as kids. I even suspected the "Yellow Ghost" Dabai showed me later wasn't the same one at all. But thinking again, it was the same, but as time passed, they were aging too, changing too...\\n\\nI started doubting myself. Does this mean Dabai's judgment was right? Was I increasingly leaning toward his side internally?\\n\\nStill no evidence, except the so-called dying director's wail in the strangulation scene from currently available resources. But I was increasingly uncertain, because time doesn't stop.\\n\\nMy life in this city oscillated with its rhythm. Over the following years I moved several times, keys accumulating on my keychain. I met new girlfriends. Each time I thought they were the right world, the new one. But new inevitably became old, and "right" no longer mattered.\\n\\nGradually, even my memory of that last time watching a film with Dabai in that rental room faded like notes written on thermal paper.\\n\\nNo news from home either.\\n\\nOne night I had a dream. I dreamed tons of plastic discs piled on my hometown's garbage mountain, crushed by excavators, buried. I saw countless black tapes pulled from VHS cassettes dancing in the wind, tangling on high-voltage power lines, hooking birds, burned without a trace by electric arcs. I saw a silhouette standing in the distance, silently recording all this with an unpowered DV. Wind replaced the drive shaft, pulling film exposed from the broken shell outward, completing continuous exposure through violent tearing.\\n\\nAfter waking I called home. Mother couldn't understand why I was asking about Dabai's family again. Obviously after Dabai's dad died, Dabai's mom moved back to her rural hometown. The storefront was returned long ago, those discs and tapes whereabouts unknown.\\n\\nMother's tone was slightly suspicious. I knew she feared I'd become神神叨叨 like Dabai, so I casually mentioned my current situation and hung up.\\n\\nUneasy, I turned over all my possessions and found the DV I'd brought back from home. Since bringing it back I'd never charged it, let alone opened it. I pulled out the data card and inserted it into my computer. I saw Dabai filming me, and me filming Dabai in that rental room. After returning from Dabai's store that year, I hadn't looked at this footage in years.`,
            `In one clip, Dabai was filming us watching a tape, and the tape content was copied from this DV. Looking at the objects in the video, I remembered the TV and VCR he bought me. I'd left those things with the landlord of that rental, don't know if they're still there.\\n\\nWithout realizing it I'd scrolled to the last footage on the data card. This clip was recorded when Dabai returned to the small town, back to his own store. The DV was placed on a package shelf by Dabai, filming him rewatching VHS tapes in the store. I was about to close it when I noticed Dabai getting up and removing a tape from the VCR, putting it in a postal bag and writing an address on the address field. The recording stopped there because the card was full. I enlarged the last frame on my computer trying to see what Dabai wrote, but couldn't make anything out. But I could clearly see the bag he casually picked up had a postal service logo.`,
            `Late at night, I followed a young woman into the complex entrance, still afraid security would stop and question me. That old guard I knew was long gone.\\n\\nStanding under the building I used to live in, I saw that huge but barely-used dedicated postal service package box still in its original place. Relieved, I went forward to check the mailbox that used to be mine. After forcibly prying it open, I retrieved the postal package from under a layer of dusty advertisement papers.\\n\\nI stood downstairs gazing up at the place I used to live for a long time. The lights inside never came on. My determination was planted bit by bit. Standing before that security door, I took out my keychain, carefully distinguished, and inserted the unreturned key into the lock.\\n\\nI took a breath, my head still foggy.\\n\\nThe room was pitch black. I told myself I was being as quiet as possible, and after saying so felt less nervous. I didn't dare turn on lights, using my phone flashlight to sweep over those familiar old furniture. Their positions hadn't changed. I walked to the corner where I used to pile those machines—they were still there, but all plugs were disconnected.\\n\\nI caressed the television cover—don't know if the landlord or new tenant put it on—satin-faced, my fingers picking up a layer of dust. I removed the cover, plugged it in, tossed the VHS tape onto the floor in front of me, then sat before the TV in darkness. My phone's light beam hit the cathode ray tube and diffused. I didn't know whether I should put the tape in, whether I should watch. So I turned off the flashlight and ran to the balcony to smoke.\\n\\nBefore finishing one cigarette, the living room light suddenly came on. Someone inside shouted, "There's someone on the balcony!"`,
            `At the police station, I repeatedly explained the whole story to the police. I said my childhood friend and I were film fans furthest from film. Now film is gone, cinemas only show acrobatic nonsense, but my friend got lost in those old films for a lifetime, and now he's missing. The clue is in a film we watched together.\\n\\nBesides one officer expressing confusion, the others didn't believe me at all. How could someone break in to steal things they'd given to others? But after calling the landlord to confirm my identity and my story, they decided to let me go, with one officer accompanying me to return the key and apologize to the landlord who'd forgiven me.\\n\\nOn the way, the officer and I chatted about our respective film memories, passing the deserted cinema at the complex entrance, entering through the side door. I stood at the landlord's door knocking. In the gaps between knocks, I heard "Yellow Ghost" audio coming from inside. I guessed after police took me away, the landlord discovered the tape I'd left on the floor.\\n\\nAfter welcoming us in, the landlord quickly hit pause. I handed the landlord the key. The landlord was a bit embarrassed, but I understood—he just wanted to know what I'd risked breaking in to watch. "Just a tape you can barely see anything on," he said.\\n\\nSeeing things resolved, the officer decided to leave. I turned to go too when the landlord called me back, wanting to return the tape. When I turned back I froze, quickly stopping the landlord about to eject the tape.\\n\\nWhat I saw was "Yellow Ghost" paused on the last frame on the TV, flickering regularly on the cathode ray tube's phosphor. The landlord was right—after so many years, this tape's image was nearly impossible to see clearly, the sound rough and scratchy. But I was certain, on screen, beside the female protagonist, I saw Dabai's silhouette.\\n\\nIt was a silhouette formed by noise. The noise flickered with the frame's flicker, its crouched posture identical to Dabai sitting cross-legged before the TV years ago. Originally this frame had no blemishes at all. All traces came from watching it over and over again. Eventually the blemishes occupied the frame, becoming the image's main subject. At this moment and place, this Dabai formed by time and wear crouched in the corner of the frame observing. I remembered that year, also at this position, Dabai got excited, waving the VHS in his hand at me. I remember asking him, you say you care, but you've never even entered a cinema. Film is too far from you. You're the person furthest from film in the whole world. How will you find that so-called truth?\\n\\nAt this moment I could only stare at the flickering screen. I wasn't watching the woman on screen, I was watching that noise.\\n\\nI watched for a long time but couldn't say a word.\\n\\n「So, did you find the truth?」`
        ],
        attachmentType: 'novel'
    }
];

export const FILM_ARCHIVE: FilmReel[] = [
    {
        id: 'reel_01',
        reelNumber: 1,
        code: [0, 0, 0, 0], // 4 Champagne
        label: 'First Roll',
        contentTitle: 'First Roll',
        contentDesc: 'In blurry footage, someone makes a drink at the bar. After finishing, the camera zooms in to capture a close-up of the cocktail in a martini glass. The coaster next to it reads "50/50 Martini".',
        contentImage: [getAssetPath('/assets/film_01.jpg'), getAssetPath('/assets/film_02.jpg')]
    },
    {
        id: 'reel_02',
        reelNumber: 2,
        code: [0, 0, 0, 2], // 3 Champagne, 1 Old Fashioned
        label: 'Second Roll',
        contentTitle: 'Second Roll',
        contentDesc: 'In blurry footage, a tall person makes a drink at the bar. After finishing, the camera zooms in to capture a close-up in a martini glass. The coaster next to it reads "Steph".',
        contentImage: [getAssetPath('/assets/film_02_1.jpg'), getAssetPath('/assets/film_02_2.jpg')]
    },
    {
        id: 'reel_03',
        reelNumber: 3,
        code: [0, 0, 2, 0],
        label: 'Film 4',
        contentTitle: 'Film 4',
        contentDesc: 'In blurry footage, a tall person shakes a drink at the bar. After finishing, the camera zooms in to capture a close-up in a martini glass. The coaster next to it reads \"Whisky Sour\".',
        contentImage: [getAssetPath('/assets/film_03_1.jpg'), getAssetPath('/assets/film_03_2.jpg')]
    },
    {
        id: 'reel_04',
        reelNumber: 4,
        code: [0, 2, 0, 0],
        label: 'Fourth Roll',
        contentTitle: 'Fourth Roll',
        contentDesc: 'Shaky footage, figures tangled together, barely capturing any clear images. In the second shot, a key falls to the ground, and the photographer steps on it with their shoe.',
        contentImage: [getAssetPath('/assets/film_04_1.jpg'), getAssetPath('/assets/film_04_2.jpg')]
    },
    {
        id: 'reel_06',
        reelNumber: 5,
        code: [2, 0, 0, 0],
        label: 'Film 6',
        contentTitle: 'Film 6',
        contentDesc: 'In the dim yellow night, a chaotic pile of ruins sits in the middle of the street, forming a stark contrast with modern buildings behind. Distant lights and buildings are shrouded in a layer of hazy mist and soft focus, like a long-sealed old memory.',
        contentImage: getAssetPath('/assets/film_06.jpg')
    },
    {
        id: 'reel_07',
        reelNumber: 6,
        code: [2, 2, 2, 2],
        label: 'Film 7',
        contentTitle: 'Film 7',
        contentDesc: 'Against a mottled dark background, an essay full of Lovecraftian and poetic sentiment appears in the frame. The content mentions "wormholes," "feminism," and "atavism," signed with a bright red exclamation mark.',
        contentImage: getAssetPath('/assets/film_07.jpg')
    },
    {
        id: 'reel_00',
        reelNumber: 0,
        code: [4, 4, 4, 4],
        label: 'Reel 0',
        contentTitle: 'Reel 0',
        contentDesc: 'This is a pile of fragmented, discontinuous film strips. It appears to be a dark bar ruin, with several frames showing unusual white spots resembling cigarette burn marks.',
        contentImage: [
            getAssetPath('/assets/film_00_3.jpg'),
            getAssetPath('/assets/film_00_4.jpg'),
            getAssetPath('/assets/film_00_5.jpg'),
            getAssetPath('/assets/film_00_6.jpg'),
            getAssetPath('/assets/film_00_7.jpg'),
            getAssetPath('/assets/film_00_8.jpg'),
            getAssetPath('/assets/film_00_9.jpg')
        ]
    },
    {
        id: 'reel_ghost',
        reelNumber: -1,
        code: [0, 0, 0, 0],
        label: 'Film 3',
        contentTitle: 'Film 3',
        contentDesc: 'Shaky footage, appears to be at the old bar. The photographer hands the camera to Monty, who films the photographer\'s appearance and an image holding a sign. One person holds a book titled "Performance Art and Spiritual Healing."',
        contentImage: getAssetPath('/assets/film_03.jpg')
    },
    {
        id: 'reel_08',
        reelNumber: -2,
        code: [2, 0, 0, 0],
        label: 'Film 8',
        contentTitle: 'Film 8',
        contentDesc: 'In a dim and enclosed space, a stack of sample books with "Are bats rats?" printed on their spines sits quietly. Heavy shadows swallow most of the light, with faint reflections making the text on the spines appear particularly pale and eerie, exuding a suppressed nostalgic atmosphere.',
        contentImage: getAssetPath('/assets/film_08.jpg')
    },
    {
        id: 'reel_09',
        reelNumber: -3,
        code: [1, 1, 1, 1],
        label: 'Film 9',
        contentTitle: 'Film 9',
        contentDesc: 'In dim yellow, grainy footage, a group of young people sit on the floor, surrounded by scattered bottles and miscellaneous items. Light and shadow cast heavy, dark shadows on the walls. Blurred faces are shrouded in a layer of melancholic nostalgia, like a private record forgotten by time.',
        contentImage: getAssetPath('/assets/film_09.jpg')
    },
    {
        id: 'reel_10',
        reelNumber: 7,
        code: [2, 2, 2, 1],
        label: 'Film Fan',
        contentTitle: 'Vin_20221231',
        contentDesc: 'Drunk Vin slumps asleep at the bar, a half-finished Perfect Manhattan beside him. Next to it, book pages read "filmnik!" by Taylor Soigir.',
        contentImage: getAssetPath('/assets/film_10.jpg')
    },
    {
        id: 'reel_11',
        reelNumber: 8,
        code: [2, 2, 1, 2],
        label: 'Jam 12.18',
        contentTitle: 'Jam 12.18',
        contentDesc: 'The bartender behind the bar expectantly raises a glass. The coaster in front reads the recipe: Jam 12.18.',
        contentImage: [getAssetPath('/assets/film_11_1.jpg'), getAssetPath('/assets/film_11_2.jpg')]
    }
];

export const MUSIC_TRACKS = {
    recorder: getAssetPath('/assets/recorder_music.mp3'),
    notebook: getAssetPath('/assets/recorder_music.mp3'),
    film: getAssetPath('/assets/film_music.mp3'),
};
