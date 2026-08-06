import { CornerVineTopLeft, CornerVineBottomRight, DividerVine, SideVineLeft } from '../components/FloralDecor'

interface Recipe {
  image: string
  imageAlt: string
  title: string
  subtitle: string
  text: string
}

const recipes: Recipe[] = [
  {
    image: `${import.meta.env.BASE_URL}/apple.jpeg`,
    imageAlt: 'Flaky apple-Filled Pastry, Dusted with Cinnamon',
    title: "Flaky Cinnamon-Dusted Apple-Filled Pastry",
    subtitle: 'The Knights of Kusan — Chapter 25',
    text: `While Sabina is wandering with Kellan through East Kusan’s night markets (along with a certain prince), she encounters this stall that sells a churro-like dessert, filled with a warm, flavorful apple filling.
	This Kusan dessert was built up by me after the classic apple strudel, but with the desire to make it easier to walk around with and bite into. 

Ingredients:
Dough:
**Inspired by the dough from “The Banana Diaries” Flaky Gluten Free/Vegan Recipe**
2 cups all-purpose flour
1 tbsp cornstarch
2 tbsp granulated sugar
Pinch of sea salt
1 cup frozen vegan butter
½ cup (more) frozen vegan butter
10 tbsp cold water

APPLE FILLING:
**Inspired by the apple filling from Gretchensveganbakery’s recipe**
4 large apples
2 tbsp vegan butter
Cinnamon (measure from the heart)
2 tbsp granulated sugar
4 tsp cornstarch
4-5 tsp water

Cinnamon Sugar:
Cinnamon (measure from the heart)
Granulated sugar (measure from the heart)
Butter (measure as much as you think you need)


Instructions:
DOUGH:
Whisk together the flour, cornstarch, sugar, and salt.
Grate the ½ cup of frozen butter using a cheese grater. Set it aside on a plate for now.
Cut the remaining 1 cup of frozen butter into ¾ of an inch squares, then use a hand mixer to combine it with the contents of the bowl.
Toss the mixture with your hand, for extra help.
Add in half of the water and mix gently with your hands in a kneading-like fashion. Try to make a lump of dough. Then, keep adding water until you get a dough ball that’s somewhat sticky. 
Chill the dough in the fridge for 30 minutes in a flat rectangle shape.
Get out a rolling pin and spread flour on a clean table surface. Roll the dough out to about ¼ of an inch thick. Add some of the grated frozen butter (about ¼ of it), then fold one end of the dough about ⅔ of the way from the bottom. Fold the bottom end over this fold.
Repeat this process three more times, until you run out of grated butter.
Chill the butter in the fridge for 30 more minutes, in another flat rectangle.

APPLE FILLING:
Peel and cut the four apples into wedge slices.
Cut the wedges into even smaller slices.
Over medium heat, melt the butter in a pot. Add cinnamon and mix until combined.
Add in the apples and stir until combined.
Add in the sugar and stir until the mixture has softened.
Mix the cornstarch with just enough water in a separate bowl to liquidize it. Then, pour it into the mixture and mix.
Continue stirring the pot until you feel the apples have become soft enough before baking.
Let the apples cool to room temperature before you put them into the dough!

PUTTING EVERYTHING TOGETHER:
Take the dough out (the longest side of the rectangle on the top), cut horizontally into 3-4 inch wide strips.
Use a spoon and fill the middle of each strip with a thin layer of apple filling, just enough for the strip of dough to still be able to wrap around it.
Envelop each strip of apple filling with the dough it was put on top of, resembling a roll. Pinch the ends of each strip to prevent the filling from escaping.
Preheat the oven to 415°F.
Leave small, 1 inch cuts in the rolls of dough — 3-4 of them, just to let air escape. Don’t make the cuts too wide, or else the apple filling will come out.
Bake the dough until golden brown and crispy-looking on the outside.
Melt your selected amount of butter for the cinnamon sugar coating; this will allow the sugar to stick. 
Combine your predetermined amounts of cinnamon and sugar in a separate bowl.
Let the apple-filled dough rolls cool for 15-20 minutes.
Using a silicon baking brush, “paint” the top of each roll with melted butter.
Using a small spoon, dust the cinnamon sugar over the rolls.
`,
  },
  /*
  {
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=450&fit=crop&auto=format',
    imageAlt: 'Honey and herb flatbreads with wildflower garnish',
    title: 'Wayfarers\' Honey Flatbread',
    subtitle: 'The Knights of Kusan — Chapter 9: "The Crossroads Market"',
    text: `Ilara buys three of these from a market stall and shares them with the knights without being asked. It is, the narrator notes, the first time any of them smile.

Ingredients:
• 2 cups all-purpose flour
• 1 tsp salt
• 1 tsp baking powder
• ¾ cup warm water
• 2 tbsp olive oil
• 3 tbsp wildflower honey
• 1 tsp dried thyme
• Flaky sea salt for finishing

Method:
Mix flour, salt, and baking powder in a bowl. Add water and olive oil and knead into a soft, smooth dough — about 5 minutes. Rest covered for 20 minutes.

Divide into 6 portions and roll each thin on a floured surface. Heat a dry iron skillet until very hot. Cook each flatbread 2 minutes per side until blistered and golden.

While still hot, brush generously with honey and scatter dried thyme and flaky salt over the top. Eat immediately.`,
  },
  {
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=450&fit=crop&auto=format',
    imageAlt: 'A delicate rose petal and elderflower tart on a wooden board',
    title: 'Rose & Elderflower Tart',
    subtitle: 'The Knights of Kusan — Chapter 16: "The Feast Before the Road"',
    text: `The feast at Castellan Mira's table ends with this tart. It's the last good thing anyone eats for a long time, and the characters know it.

Ingredients (tart shell):
• 1½ cups flour
• ½ cup cold butter, cubed
• ¼ cup powdered sugar
• 1 egg yolk, 2 tbsp cold water

Filling:
• 1 cup heavy cream
• 3 egg yolks
• ⅓ cup elderflower cordial
• 2 tbsp sugar
• 1 tsp rose water
• Dried rose petals and a drizzle of honey to finish

Method:
Make the shell: pulse flour, butter, and sugar until crumbly. Add yolk and water; press into a 9-inch tart pan. Blind bake at 375°F for 15 minutes.

Filling: whisk cream, yolks, cordial, sugar, and rose water together. Pour into the cooled shell. Bake at 325°F for 25–30 minutes until just set with a slight wobble at center.

Cool completely. Scatter dried rose petals across the top and finish with a thin drizzle of honey. Serve in thin slices with a small glass of something cold and floral.`,
  },
  */
]

function RecipeSection({ recipe, index }: { recipe: Recipe; index: number }) {
  const isEven = index % 2 === 0

  const cardBg = index === 0
    ? 'linear-gradient(135deg, rgba(87,85,39,0.2) 0%, rgba(146,142,94,0.18) 100%)'
    : index === 1
    ? 'linear-gradient(135deg, rgba(87,85,39,0.28) 0%, rgba(71,68,32,0.2) 100%)'
    : 'linear-gradient(135deg, rgba(146,142,94,0.22) 0%, rgba(87,85,39,0.15) 100%)'

  return (
    <article
      className="rounded-2xl overflow-hidden shadow-sm mb-12"
      style={{
        background: cardBg,
        border: '1px solid rgba(87,85,39,0.25)',
      }}
    >
      <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-0`}>
        {/* Image */}
        <div className="flex-shrink-0 md:w-80 h-64 md:h-auto overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.imageAlt}
            className="w-full h-full object-cover"
            style={{ filter: 'sepia(20%) saturate(85%)' }}
          />
        </div>

        {/* Content */}
        <div className="flex-1 px-8 py-8">
          <p
            className="text-xs tracking-[0.25em] uppercase mb-3"
            style={{ fontFamily: "'Aboreto', cursive", color: 'var(--meadow-mauve)' }}
          >
            {recipe.subtitle}
          </p>
          <h3
            className="text-2xl md:text-3xl mb-5 leading-snug"
            style={{ fontFamily: "'Aboreto', cursive", color: 'var(--dark-chocolate)' }}
          >
            {recipe.title}
          </h3>
          <div
            className="text-sm md:text-base leading-relaxed whitespace-pre-line max-h-64 overflow-y-auto pr-2"
            style={{
              fontFamily: "'Lora', serif",
              color: 'var(--charcoal)',
              scrollbarWidth: 'thin',
              scrollbarColor: 'var(--soldier-green) transparent',
            }}
          >
            {recipe.text}
          </div>
        </div>
      </div>
    </article>
  )
}

export default function Recipes() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-44 h-44 pointer-events-none select-none">
        <CornerVineTopLeft className="w-full h-full" />
      </div>
      <div className="absolute top-0 right-0 w-44 h-44 pointer-events-none select-none" style={{ transform: 'scaleX(-1)' }}>
        <CornerVineTopLeft className="w-full h-full" />
      </div>
      <div className="absolute bottom-0 right-0 w-44 h-44 pointer-events-none select-none">
        <CornerVineBottomRight className="w-full h-full" />
      </div>
      <div className="absolute bottom-0 left-0 w-44 h-44 pointer-events-none select-none" style={{ transform: 'scaleX(-1)' }}>
        <CornerVineBottomRight className="w-full h-full" />
      </div>
      <div className="absolute left-0 top-48 w-14 pointer-events-none select-none opacity-40">
        <SideVineLeft className="w-full" />
      </div>

      <div className="max-w-4xl mx-auto px-6 pt-24 pb-28">
        <div className="text-center mb-14">
          <p
            className="text-sm tracking-[0.3em] uppercase mb-3"
            style={{ color: 'var(--soldier-green)', fontFamily: "'Aboreto', cursive" }}
          >
            Straight from Kusan!
          </p>
          <h1
            className="text-5xl md:text-6xl"
            style={{ fontFamily: "'Aboreto', cursive", color: 'var(--dark-chocolate)' }}
          >
            Recipes
          </h1>
          <p
            className="mt-5 text-lg italic max-w-lg mx-auto leading-relaxed"
            style={{ fontFamily: "'Lora', serif", color: 'var(--charcoal)' }}
          >
            Believe it or not, I have recipes for almost everything I write about in this series. I'll drop some of them here, on occasion!
          </p>
          <div className="max-w-sm mx-auto mt-8">
            <DividerVine className="w-full" />
          </div>
        </div>

        <div>
          {recipes.map((recipe, index) => (
            <RecipeSection key={recipe.title} recipe={recipe} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
