import Lightning from "./Icons/Lightning";
import Range from "./Icons/Range";
import Blood from "./Icons/Blood";
import Tier from "./Icons/Tier";
import ManyPredict from "./Icons/ManyPredict";
import Conclusion from "./Icons/Conclusion";

export const data = [
  {
    id: 1,
    icon: Lightning,
    title: 'Fonction',
    color: 'primary.main',
    value: 45,
    slug: "/function"
  },
  {
    id: 2,
    icon: Range,
    title: 'Architecture',
    color: 'error.light',
    value: 157,
    max: 300,
    slug: "/architecture"
  },
  {
    id: 3,
    icon: Blood,
    title: 'Apprentissage',
    color: 'secondary.main',
    value: 9,
    slug: "/training"
  },
  {
    id: 4,
    icon: Tier,
    title: 'Prédiction un pas',
    color: 'warning.darker',
    value: 25,
    slug: "/prediction"
  },
  {
    id: 5,
    icon: ManyPredict,
    title: 'Prédiction plusieurs pas',
    color: 'primary.main',
    value: 45,
    slug: "/multi-prediction"
  },
  {
    id: 6,
    icon: Conclusion,
    title: 'Remarque',
    color: 'primary.main',
    value: 45,
    slug: "/conclusion"
  },
];