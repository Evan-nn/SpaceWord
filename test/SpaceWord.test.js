function runTests() {
    console.log("%c", "color: blue; font-weight: bold;");

    const assert = (name, condition) => {
        if (condition) {
            console.log(`%c[✅] PASS : ${name}`, "color: green;");
        } else {
            console.error(`%c[❌] FAIL : ${name}`, "color: red; font-weight: bold;");
        }
    };

    // --- Tests sur getRandomInt ---
    const valRange = getRandomInt(-42, 42);
    assert("getRandomInt(-42, 42) est inférieur à 43", valRange < 43);
    assert("getRandomInt(42, 42) retourne exactement 42", getRandomInt(42, 42) === 42);

    // --- Tests sur rectIntersect ---
    // (x1, y1, w1, h1, x2, y2, w2, h2)
    assert("rectIntersect (pas de collision)", rectIntersect(1, 1, 2, 1, 4, 1, 1, 2) === false);
    assert("rectIntersect (collision)", rectIntersect(1, 1, 5, 2, 4, 1, 1, 2) === true);

    // --- Tests sur circleIntersect ---
    // (x1, y1, r1, x2, y2, r2)
    assert("circleIntersect (trop loin)", circleIntersect(3, 2, 1, 6, 1, 1.5) === false);
    assert("circleIntersect (chevauchement)", circleIntersect(3, 2, 1, 3, -2, 4) === true);

    // --- Tests sur timeToString ---
    assert("timeToString avec 123456789ms", timeToString(123456789) === "17:36:78");
    assert("timeToString avec du texte 'toto'", timeToString("toto") === "NaN:NaN:NaN");

    console.log("%c--- FIN DE LA VÉRIFICATION ---", "color: blue; font-weight: bold;");
}

runTests();