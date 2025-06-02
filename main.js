let heroName = "Arthur";
let heroXp = 1000;
let heroLevel = "";

for (;heroXp < 12000; heroXp += 1000) {

    if (heroXp <= 1000) {
        heroLevel = "Ferro";
    } else if (heroXp <= 2000) {
        heroLevel = "Bronze";
    } else if (heroXp <= 5000) {
        heroLevel = "Prata";
    } else if (heroXp <= 7000) {
        heroLevel = "Ouro";
    } else if (heroXp <= 8000) {
        heroLevel = "Platina";
    } else if (heroXp <= 9000) {
        heroLevel = "Ascendente";
    } else if (heroXp <= 10000) {
        heroLevel = "Imortal";
    } else {
        heroLevel = "Radiante";
    }

    console.log(`O Herói de nome ${heroName} está no nível de ${heroLevel}`);
}