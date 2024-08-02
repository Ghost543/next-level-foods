"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var better_sqlite3_1 = __importDefault(require("better-sqlite3"));
var db = (0, better_sqlite3_1.default)('meals.db');
var dummyMeals = [
    {
        title: 'Juicy Cheese Burger',
        slug: 'juicy-cheese-burger',
        image: '/images/burger.jpg',
        summary: 'A mouth-watering burger with a juicy beef patty and melted cheese, served in a soft bun.',
        instructions: "\n      1. Prepare the patty:\n         Mix 200g of ground beef with salt and pepper. Form into a patty.\n\n      2. Cook the patty:\n         Heat a pan with a bit of oil. Cook the patty for 2-3 minutes each side, until browned.\n\n      3. Assemble the burger:\n         Toast the burger bun halves. Place lettuce and tomato on the bottom half. Add the cooked patty and top with a slice of cheese.\n\n      4. Serve:\n         Complete the assembly with the top bun and serve hot.\n    ",
        creator: 'John Doe',
        creator_email: 'johndoe@example.com',
    },
    {
        title: 'Spicy Curry',
        slug: 'spicy-curry',
        image: '/images/curry.jpg',
        summary: 'A rich and spicy curry, infused with exotic spices and creamy coconut milk.',
        instructions: "\n      1. Chop vegetables:\n         Cut your choice of vegetables into bite-sized pieces.\n\n      2. Saut\u00E9 vegetables:\n         In a pan with oil, saut\u00E9 the vegetables until they start to soften.\n\n      3. Add curry paste:\n         Stir in 2 tablespoons of curry paste and cook for another minute.\n\n      4. Simmer with coconut milk:\n         Pour in 500ml of coconut milk and bring to a simmer. Let it cook for about 15 minutes.\n\n      5. Serve:\n         Enjoy this creamy curry with rice or bread.\n    ",
        creator: 'Max Schwarz',
        creator_email: 'max@example.com',
    },
    {
        title: 'Homemade Dumplings',
        slug: 'homemade-dumplings',
        image: '/images/dumplings.jpg',
        summary: 'Tender dumplings filled with savory meat and vegetables, steamed to perfection.',
        instructions: "\n      1. Prepare the filling:\n         Mix minced meat, shredded vegetables, and spices.\n\n      2. Fill the dumplings:\n         Place a spoonful of filling in the center of each dumpling wrapper. Wet the edges and fold to seal.\n\n      3. Steam the dumplings:\n         Arrange dumplings in a steamer. Steam for about 10 minutes.\n\n      4. Serve:\n         Enjoy these dumplings hot, with a dipping sauce of your choice.\n    ",
        creator: 'Emily Chen',
        creator_email: 'emilychen@example.com',
    },
    {
        title: 'Classic Mac n Cheese',
        slug: 'classic-mac-n-cheese',
        image: '/images/macncheese.jpg',
        summary: "Creamy and cheesy macaroni, a comforting classic that's always a crowd-pleaser.",
        instructions: "\n      1. Cook the macaroni:\n         Boil macaroni according to package instructions until al dente.\n\n      2. Prepare cheese sauce:\n         In a saucepan, melt butter, add flour, and gradually whisk in milk until thickened. Stir in grated cheese until melted.\n\n      3. Combine:\n         Mix the cheese sauce with the drained macaroni.\n\n      4. Bake:\n         Transfer to a baking dish, top with breadcrumbs, and bake until golden.\n\n      5. Serve:\n         Serve hot, garnished with parsley if desired.\n    ",
        creator: 'Laura Smith',
        creator_email: 'laurasmith@example.com',
    },
    {
        title: 'Authentic Pizza',
        slug: 'authentic-pizza',
        image: '/images/pizza.jpg',
        summary: 'Hand-tossed pizza with a tangy tomato sauce, fresh toppings, and melted cheese.',
        instructions: "\n      1. Prepare the dough:\n         Knead pizza dough and let it rise until doubled in size.\n\n      2. Shape and add toppings:\n         Roll out the dough, spread tomato sauce, and add your favorite toppings and cheese.\n\n      3. Bake the pizza:\n         Bake in a preheated oven at 220\u00B0C for about 15-20 minutes.\n\n      4. Serve:\n         Slice hot and enjoy with a sprinkle of basil leaves.\n    ",
        creator: 'Mario Rossi',
        creator_email: 'mariorossi@example.com',
    },
    {
        title: 'Wiener Schnitzel',
        slug: 'wiener-schnitzel',
        image: '/images/schnitzel.jpg',
        summary: 'Crispy, golden-brown breaded veal cutlet, a classic Austrian dish.',
        instructions: "\n      1. Prepare the veal:\n         Pound veal cutlets to an even thickness.\n\n      2. Bread the veal:\n         Coat each cutlet in flour, dip in beaten eggs, and then in breadcrumbs.\n\n      3. Fry the schnitzel:\n      Heat oil in a pan and fry each schnitzel until golden brown on both sides.\n\n      4. Serve:\n      Serve hot with a slice of lemon and a side of potato salad or greens.\n ",
        creator: 'Franz Huber',
        creator_email: 'franzhuber@example.com',
    },
    {
        title: 'Fresh Tomato Salad',
        slug: 'fresh-tomato-salad',
        image: '/images/tomato-salad.jpg',
        summary: 'A light and refreshing salad with ripe tomatoes, fresh basil, and a tangy vinaigrette.',
        instructions: "\n      1. Prepare the tomatoes:\n        Slice fresh tomatoes and arrange them on a plate.\n    \n      2. Add herbs and seasoning:\n         Sprinkle chopped basil, salt, and pepper over the tomatoes.\n    \n      3. Dress the salad:\n         Drizzle with olive oil and balsamic vinegar.\n    \n      4. Serve:\n         Enjoy this simple, flavorful salad as a side dish or light meal.\n    ",
        creator: 'Sophia Green',
        creator_email: 'sophiagreen@example.com',
    },
];
db.prepare("\n   CREATE TABLE IF NOT EXISTS meals (\n       id INTEGER PRIMARY KEY AUTOINCREMENT,\n       slug TEXT NOT NULL UNIQUE,\n       title TEXT NOT NULL,\n       image TEXT NOT NULL,\n       summary TEXT NOT NULL,\n       instructions TEXT NOT NULL,\n       creator TEXT NOT NULL,\n       creator_email TEXT NOT NULL\n    )\n").run();
function initData() {
    return __awaiter(this, void 0, void 0, function () {
        var stmt, _i, dummyMeals_1, meal;
        return __generator(this, function (_a) {
            stmt = db.prepare("\n      INSERT INTO meals VALUES (\n         null,\n         @slug,\n         @title,\n         @image,\n         @summary,\n         @instructions,\n         @creator,\n         @creator_email\n      )\n   ");
            for (_i = 0, dummyMeals_1 = dummyMeals; _i < dummyMeals_1.length; _i++) {
                meal = dummyMeals_1[_i];
                stmt.run(meal);
            }
            return [2 /*return*/];
        });
    });
}
initData();
// tsc --strict --esModuleInterop initdb.ts
