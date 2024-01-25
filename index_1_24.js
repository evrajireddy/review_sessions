const dinos = [
    {
      dinosaurId: "YLtkN9R37",
      name: "Allosaurus",
      pronunciation: "AL-oh-sore-us",
      meaningOfName: "other lizard",
      diet: "carnivorous",
      lengthInMeters: 12,
      period: "Late Jurassic",
      mya: [156, 144],
      info: "Allosaurus was an apex predator in the Late Jurassic in North America.",
    },
    {
      dinosaurId: "GGvO1X9Zeh",
      name: "Apatosaurus",
      pronunciation: "ah-PAT-oh-sore-us",
      meaningOfName: "deceptive lizard",
      diet: "herbivorous",
      lengthInMeters: 21,
      period: "Late Jurassic",
      mya: [154, 145],
      info: "Named the 'deceptive lizard' because its skull was confused with those of other sauropods until 1909.",
    },
    {
      dinosaurId: "BFjjLjea-O",
      name: "Brachiosaurus",
      pronunciation: "BRAK-ee-oh-sore-us",
      meaningOfName: "arm lizard",
      diet: "herbivorous",
      lengthInMeters: 30,
      period: "Late Jurassic",
      mya: [155, 140],
      info: "Brachiosaurus was a large, North American sauropod dinosaur with an arch encircling its nasal opening.",
    },
    {
      dinosaurId: "iOVNUcv-ww",
      name: "Compsognathus",
      pronunciation: "komp-sog-NATH-us",
      meaningOfName: "pretty jaw",
      diet: "carnivorous",
      lengthInMeters: 0.65,
      period: "Late Jurassic",
      mya: [145, 140],
      info: "Compsognathus was small and bipedal, roughly the size of a turkey. It lived in Europe and was the first dinosaur genus to be portrayed with feathers.",
    },
    {
      dinosaurId: "WHQcpcOj0G",
      name: "Dracorex",
      pronunciation: "dray-ko-rex",
      meaningOfName: "dragon king",
      diet: "herbivorous",
      lengthInMeters: 4,
      period: "Late Cretaceous",
      mya: [66],
      info: "Dracorex hogwartsia was a pachycephalosaur that did not have a domed head. Instead, its skull was adorned with spikes and frills reminiscent of a dragon. A skull was discovered in the Hell Creek Formation in South Dakota and donated to the Children's Museum of Indianapolis in 2004. Its name was inspired by J.K. Rowling's Harry Potter series and the young visitors to the children's museum.",
    },
    {
      dinosaurId: "GKl035EYKN",
      name: "Elasmosaurus",
      pronunciation: "ee-LAZ-mo-sore-us",
      meaningOfName: "thin plate lizard",
      diet: "carnivorous",
      lengthInMeters: 14,
      period: "Late Cretaceous",
      mya: [80.5],
      info: "Elasmosaurus was an aquatic dinosaur with an extremely long neck that likely fed on other smaller aquatic fauna like fish, molluscs, and squid. E.D. Cope mistakenly placed the skull of an Elasmosaurus on the much shorter tail rather than the extremely long neck.",
    },
    {
      dinosaurId: "V53DvdhV2A",
      name: "Giraffatitan",
      pronunciation: "ji-raf-e-tie-tan",
      meaningOfName: "giraffe titan",
      diet: "herbivorous",
      lengthInMeters: 23,
      period: "Late Jurassic",
      mya: [154, 142],
      info: "Giraffatitan was a large sauropod related to Brachiosaurus with huge nostrils and nasal openings in its skull.",
    },
    {
      dinosaurId: "2GglUqKT0G",
      name: "Indosuchus",
      pronunciation: "in-doh-sook-us",
      meaningOfName: "Indian crocodile",
      diet: "carnivorous",
      lengthInMeters: 7,
      period: "Late Cretaceous",
      mya: [70, 66],
      info: "Indosuchus had a flattened crest on its skull.",
    },
    {
      dinosaurId: "aIR95B2TWm",
      name: "Jingshanosaurus",
      pronunciation: "jing-shahn-oh-sore-us",
      meaningOfName: "Jingshan lizard",
      diet: "herbivorous",
      lengthInMeters: 5,
      period: "Early Jurassic",
      mya: [205, 190],
      info: "Jingshanosaurus was one of the last prosauropods, a long-necked herbivore able to walk on two legs.",
    },
    {
      dinosaurId: "Pr6kc4Q_Xf",
      name: "Khaan",
      pronunciation: "kahn",
      meaningOfName: "ruler",
      diet: "omnivorous",
      lengthInMeters: 1.8,
      period: "Late Cretaceous",
      mya: [81, 75],
      info: "Khaan was an oviraptor with a parrot-like beak, discovered in Mongolia.",
    },
    {
      dinosaurId: "GOycwH_EiU",
      name: "Minmi",
      pronunciation: "min-mie",
      meaningOfName: "Minmi Crossing, Queensland, Australia",
      diet: "herbivorous",
      lengthInMeters: 3,
      period: "Early Cretaceous",
      mya: [121, 112],
      info: "Minmi was a small, anklyosaurian, armored dinosaur discovered in Australia.",
    },
    {
      dinosaurId: "Lfp-pAYmDv",
      name: "Ouranosaurus",
      pronunciation: "oo-RAH-noh-sore-us",
      meaningOfName: "brave monitor lizard",
      diet: "herbivorous",
      lengthInMeters: 7,
      period: "Early Cretaceous",
      mya: [125, 112],
      info: "Ouranosaurus was an iguanodont dinosaur in Africa. It had a large sail on its back supported by long, wide neural spines and an elnogated, flat skull.",
    },
    {
      dinosaurId: "ft5Gs5izdq",
      name: "Parasaurolophus",
      pronunciation: "PARR-eh-saw-ROL-off-us / PARR-eh-sawr-eh-LOH-fus",
      meaningOfName: "near crested lizard",
      diet: "herbivorous",
      lengthInMeters: 11,
      period: "Late Cretaceous",
      mya: [76, 74],
      info: "Found in Canada and the USA, Parasaurolophus was a hadrosaur most famous for its long, elaborate cranial crest.",
    },
    {
      dinosaurId: "JIj72eqrz6",
      name: "Spinosaurus",
      pronunciation: "SPINE-oh-SORE-us",
      meaningOfName: "spine lizard",
      diet: "carnivorous",
      lengthInMeters: 18,
      period: "Early Cretaceous",
      mya: [112, 97],
      info: "Spinosaurus was one of the largest carnivorous dinosaurs to walk the Earth. Its diet consisted mostly of fish and the large spines on its back likely formed a sail.",
    },
    {
      dinosaurId: "wuL4ddBinQ",
      name: "Tyrannosaurus",
      pronunciation: "tie-RAN-oh-sore-us",
      meaningOfName: "tyrant lizard",
      diet: "carnivorous",
      lengthInMeters: 12,
      period: "Late Cretaceous",
      mya: [68, 66],
      info: "Tyrannosaurus is well-represented in both fiction and history with over 50 specimens discovered. It and was one of the last non-avian dinosaurs to exist before the extinction event. Tyrannosaurus had a massive skull and a long heavy tail.",
    },
    {
      dinosaurId: "qk1bNQA9_n",
      name: "Utahraptor",
      pronunciation: "YOO-tah-RAP-tor",
      meaningOfName: "Utah predator",
      diet: "carnivorous",
      lengthInMeters: 6,
      period: "Early Cretaceous",
      mya: [112, 100],
      info: "Found in the USA, Utahraptor resembled velociraptor but much larger, prompting Robert T. Bakker to pronounce it 'Spielberg's raptor' due to the velociraptors in the movie Jurassic Park being portrayed much larger than their historical counterparts.",
    },
    {
      dinosaurId: "sW_2EWCsDkE",
      name: "Vulcanodon",
      pronunciation: "vul-ka-oh-don",
      meaningOfName: "vulcano tooth",
      diet: "herbivorous",
      lengthInMeters: 6.5,
      period: "Early Jurassic",
      mya: [183, 175],
      info: "Vulcanodon was a primitive sauropod that lived in southern Africa.",
    },
    {
      dinosaurId: "U9vuZmgKwUr",
      name: "Xenoceratops",
      pronunciation: "ZEE-no-SEH-ruh-tops",
      meaningOfName: "alien horned face",
      diet: "herbivorous",
      lengthInMeters: 6,
      period: "Early Cretaceous",
      mya: [78.5, 77.5],
      info: "Xenoceratops had horns and a bony frill with elaborate ornamentation of projections, knobs, and spikes.",
    },
    {
      dinosaurId: "k-fVc9G-5Gm",
      name: "Zephyrosaurus",
      pronunciation: "ZEF-ear-ro-SORE-us",
      meaningOfName: "West wind lizard",
      diet: "herbivorous",
      lengthInMeters: 1.8,
      period: "Early Cretaceous",
      mya: [120, 110],
      info: "An ornithopod dinosaur known only by a partial skull and postcranial fragments, not much about Zephyrosaurus has been discovered.",
    },
  ];
  
  // 1. Given a dinosaur object and a key return the value of the corresponding key in the object. If no key is provided return the dinosaurId
   function returnKey(dino, key){
        if (dino[key]) {
            return dino[key];
        } else {
            return dino.dinosaurId;
        }
    
   }

   console.log(returnKey(dinos[0],'name' ));
  // ------------------------------------------------------
  // 2. Given a dinosaur object and an mya (Millions of years ago) value, return a boolean indicating whether it was alive during that time or not
  
  // If the dinosaur only has a single value for `mya`, they're considered alive if the `mya` value is equal to the given value or one less. For example, if a dinosaur has a `mya` value of `[29]`, the dinosaur's information will be returned if `29` is entered or `28` is entered.
  
  // ------------------------------------------------------
  // 3. Given an array of dinosaurs and a key return a new array where each dinosaur object is replaced with the corresponding value of a specified key within each object. If no key is given or a wrong key is given, return the dinosaurIds
  
  
  
  
  
  
  
  
  
  