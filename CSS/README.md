## CSS Syntax

Selector
{
    property : value;
}

Selector- WHO?
i.e. whose property do we want to change.

property- WHAT?
i.e. what all properties of the selector do we want to change.

value- HOW?
i.e. which value do we want to set for the property of the selector


## INLINE vs Internal vs External

- Suppose we want to change the border style of hr element and if we are having 10 hr elements in our html code,then in the case of INLINE CSS, we'll have to write the style for each of the 10 hr element.

- But in case of INTERNAL CSS, we'll need to write it only once within the head of the html code by specifiying which element we want to change and what we want to change in it.But if we are having different html pages link to that page then the changes won't br reflected on them and to change them we'll have to write the same piece of code in their head of html code.

- But in case of EXTRENAL CSS, we just have to create a different css file and write all the changes that we want and we can simply link that file to all the html files on which we want that change to be reflected.

**NOTE** :- If we are using inline ,internal & external css for changing the property of the single element then INLINE css will be given priority.
And if we are using only external & internal css for changing the property of an element then internal css will be given priority.

## Selectors:-
1) Tag
2) Class
3) ID

### Points to remember

- many elements can have the same class but ID is unique for any element.

- one element can have only one ID but one element can have multiple classes.

- class & ID selectors are given priority over the tag selector.

- ID selector is more specific.

## DISPLAY PROPERTIES :-

1. BLOCK :- block elements are those which takes whole width of the screen of the web-page,by blocking out all the elements from coming on either its left or right side.

Some Common Block elements are:-

- Headers(h1 to h6)

- Paragraphs(p)

- Divisions(div)

- Lists and list items (ol , ul , li)

- forms(form)

2. INLINE ELEMENTS :- they takes only that much space(.i.e. height & width) which is required by them.

Common Inline Elements are :-

- Spans (span)

- Images (img)

- Anchors (a)

NOTE :- we can't alter the width of the inline elements.

### We can change a block element to inline element by changing its "display" property to "inline" and we can change an inline element to block by changing its display property to "block".

3. INLINE-BLOCK : in this we can write multiple block elements next to each other and can also change their width.

### NOTE :- img tag can be thought of an inline-block ,because it allows different elmenets to sit next to it & we can also alter its width.

4. NONE :- it removes the element whose display is set to none from the website,as if it doesn't exists. 

## RULES THAT DETERMINES THE LAYOUT / how things get render on screen based on HTML code?

1. Content is everything

- in case of inline elements, they take only that much width how much long the content is.

- in case of block elements,say if we increase the font size of text then its height will be increased.

2. Order Comes from Code

- say an img tag is written prior to a heading tag, then in the web-page the image will come and below it the heading will come.But if the img tag is written after the heading tag ,then in the web-page also the image will appear after the heading.

3. Childern Sit on parents

Fonts used

- Merriweather

- Sacramento

### for images can refer the website - flaticon 

### button generator :- https://css3buttongenerator.com/

### practice html & css :- https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3