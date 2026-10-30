const verbalquiz = [
  {
    set: 'a',
    question: 'When to use derived state?',
    imageQuestion: null,
    options: [
        "Whenever the state should not trigger a re-render",
        "Whenever the state can be synchronized with an effect",
        "Whenever the state should be accessible to all components",
        "Whenever the state can be computed from another state variable"
    ],
    imageOptions: [],
    correctOption: 3,
    points: 1
  },
  {
    set: 'a',
    question: 'What triggers a UI re-render in React?',
    imageQuestion: null,
    options: [
        "Running an effect",
        "Passing props",
        "Updating state",
        "Adding event listeners to DOM elements"
    ],
    imageOptions: [],
    correctOption: 2,
    points: 1
  },
  {
    set: 'a',
    question: "When do we directly \"touch\" the DOM in React?",
    imageQuestion: null,
    options: [
        "When we need to listen to an event",
        "When we need to change the UI",
        "When we need to add styles",
        "Almost never"
    ],
    imageOptions: [],
    correctOption: 3,
    points: 1
  },
  {
    set: 'a',
    question: "In what situation do we use a callback to update state?",
    imageQuestion: null,
    options: [
        "When updating the state will be slow",
        "When the updated state is very data-intensive",
        "When the state update should happen faster",
        "When the new state depends on the previous state"
    ],
    imageOptions: [],
    correctOption: 3,
    points: 1
  },
  {
    set: 'a',
    question: 'What was the name of the wife of Joseph (son of Jacob)?',
    imageQuestion:
      '/images/121920181320/a0619b5b-4f00-4490-bef2-e15f97f7c926.png',
    options: ['Potiphar', 'Zipporah', 'Keturah', 'Asenath'],
    imageOptions: [
      '/images/121920181320/278d1132-ed64-4792-bcc8-5edb1a8325b8.png',
      '/images/121920181320/fc1d95b6-8c03-4f67-b69c-ca65ba4498d0.png',
      '/images/121920181320/6c5d842f-5806-43a2-acff-a9925cb1ae88.png',
      '/images/121920181320/aa9da0a3-ad7c-426d-80e4-c27b8f8564b6.png'
    ],
    correctOption: 0,
    points: 1,
    instruction:
      'Select the tile below that should be placed in the unknown tile above so that all three rows above follow the same pattern.'
  },
  {
    set: 'a',
    question: "What was the name of Jacob's father-in-law?",
    imageQuestion:
      '/images/121920181320/07085be3-cbce-469e-a391-2b494dfbd385.png',
    options: ['Laban', 'Nahor', 'Bethuel', 'Jethro'],
    imageOptions: [
      '/images/121920181320/54920408-b3df-4525-88c3-9b7abaadd81a.png',
      '/images/121920181320/e051c4b8-2789-481e-917b-7a4db299a20c.png',
      '/images/121920181320/30e1e5d0-ee14-4421-b08c-b5a6b83c763b.png',
      '/images/121920181320/7b6ce685-8bf4-4fd8-8f7b-2cd16dacc0bd.png'
    ],
    correctOption: 1,
    points: 1,
    instruction:
      'Select a suitable option that would complete the figure matrix.'
  },
  {
    set: 'a',
    question:
      "Which disciple replaced Judas Iscariot after Jesus' resurrection?",
    imageQuestion:
      '/images/121920181320/9146a8a7-2261-47ea-b5ca-d574665ec45f.png',
    options: ['Matthias', 'Matthew', 'Nicodemus', 'Saul'],
    imageOptions: [
      '/images/121920181320/b1715879-9b4f-4643-83cd-9baaa3005bea.png',
      '/images/121920181320/d149a3f3-06d2-464f-9e22-7e7b6b7fd5b7.png',
      '/images/121920181320/9f136fae-1d78-47a0-9a41-7ab68bc6754b.png',
      '/images/121920181320/f4370244-e151-4c26-9c6e-b85449414cec.png'
    ],
    correctOption: 1,
    points: 1,
    instruction:
      'Select the tile below that should be placed in the unknown tile above so that all three rows above follow the same pattern.'
  },
  {
    set: 'a',
    question:
      "What was the name of Saul's eldest daughter, who was promised to David but given to someone else?",
    imageQuestion:
      '/images/121920181320/a3825173-0ac9-4e94-ac0a-95ef880d8ef0.png',
    options: ['Michal', 'Shulamite', 'Merab', 'Talmai'],
    imageOptions: [
      '/images/121920181320/826933ce-1e74-4cb2-8441-d28eb330ab4b.png',
      '/images/121920181320/41baa178-2e2f-48e0-85c5-60b402ddba90.png',
      '/images/121920181320/0216d9cc-33db-42bf-b5c3-ea4f6555f15c.png',
      '/images/121920181320/69fca3ba-593c-4b62-8ce1-9a25260656c1.png'
    ],
    correctOption: 0,
    points: 1,
    instruction:
      'Select the tile below that should be placed in the unknown tile above so that all three rows above follow the same pattern.'
  },
  {
    set: 'a',
    question: 'If we pass a function to useState, when will that function be called?',
    imageQuestion: null,
    options: [
        "On each re-render",
        "Each time we update the state",
        "Only on the initial render",
        "The first time we update the state"
      ],
    imageOptions: [],
    correctOption: 2,
    points: 1
  },
  {
    set: 'a',
    question:
      'Who was the wise woman who stopped David from destroying Nabal, her husband, and her house?',
    imageQuestion:
      '/images/121920181320/ab6a8ecd-08d1-4d53-9827-917c496c1a6c.png',
    options: ['Merab', 'Michal', 'Abigail', 'Bathsheba'],
    imageOptions: [
      '/images/121920181320/42ecae45-c3d7-4d2f-917c-46f75aaf3366.png',
      '/images/121920181320/d56f2f6e-71bd-4e79-9ab9-cb604850cbef.png',
      '/images/121920181320/0dc4b864-18ab-444b-8f70-2aca6981d79e.png',
      '/images/121920181320/27ff08d2-1b85-42cb-98d3-bd19dc2b5d83.png'
    ],
    correctOption: 1,
    points: 1,
    instruction:
      'Following the pattern above, select which tile below should be placed in tile 4.'
  },
  {
    set: 'a',
    question: 'What is the name of the town where Jesus was born?',
    imageQuestion:
      '/images/121920181320/5a0d7148-4f78-48ce-aa00-17cd22bcb956.png',
    options: ['Nazareth', 'Bethlehem', 'Jerusalem', 'Galilee'],
    imageOptions: [
      '/images/121920181320/b5d340c7-0e1e-4319-8793-f075f3b951ae.png',
      '/images/121920181320/f4556cf9-92eb-4914-9d92-723b612b22ad.png',
      '/images/121920181320/6fdb4ee4-575c-4c79-a82f-cd61049f6bf7.png',
      '/images/121920181320/15808b42-72c0-4949-8dee-f3ce1a97c607.png'
    ],
    correctOption: 3,
    points: 1,
    instruction:
      'Select a suitable option that would complete the figure matrix'
  },
  {
    set: 'a',
    question: 'At what age did Jesus begin his ministry?',
    imageQuestion:
      '/images/121920181320/c6265819-dd46-42fb-8ba4-a949e8574f99.png',
    options: [
      'Around 30 years old',
      'At the age of 18',
      'At the age of 12',
      'At approximately 7 years old'
    ],
    imageOptions: [
      '/images/121920181320/267a674b-996b-4605-b2b2-f906e4f31e30.png',
      '/images/121920181320/41c4c501-4a90-460f-8dbe-84e15b429c03.png',
      '/images/121920181320/bae09bc6-3008-4643-8e48-0c529423709f.png',
      '/images/121920181320/bb01c719-b24a-4131-bcc0-bf6650cc2464.png'
    ],
    correctOption: 3,
    points: 1,
    instruction:
      'Select a suitable option that would complete the figure matrix'
  },
  {
    set: 'a',
    question: 'How to pass data into a child component?',
    imageQuestion: null,
    options: ["State", "Props", "PropTypes", "Parameters"],
    imageOptions: [],
    correctOption: 1,
    points: 1
  }
];

export default verbalquiz;
