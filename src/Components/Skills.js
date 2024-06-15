function Skills() {
        const languages = [
        "C",
        "C++",
        "C#",
        "Java",
        "Python",
        "Dart",
        "SQL"
    ];
    const certifications = [
        "Codechum C Certification",
        "Codechum Java Certification",
        "PHILNITS exam passer 2024",
        "Level 3 TOPCIT certified"
      ];
    const frameworks = [
        "Springboot",
        "React",
        "Firebase",
        "Flutter",
        "Android Studio",
        "Godot Game Engine"
      ];
    const maxSize = Math.max(Math.max(languages.length, frameworks.length), certifications.length);
    let orderedList = new Array(maxSize).fill(null);
    for (let i = 0; i < maxSize; i++) {
        if (i < languages.length) {
           orderedList[i] = languages[i];
           i++; 
        }
        if (i < frameworks.length) {
            orderedList[i] = frameworks[i];
            i++; 
        }
        if (i < certifications.length) {
            orderedList[i] = certifications[i];
         }
    }
    return <main>
        <div className="grid">
            <div className="column">
                <h3>Programming Languages Used:</h3>
                <ul>
                    {languages.map(
                        (item) => <li>{item}</li>
                    )}
                </ul>
            </div>
            <div className="column">
                <h3>Frameworks Used:</h3>
                <ul>
                    {frameworks.map(
                        (item) => <li>{item}</li>
                    )}
                </ul>
            </div>
            <div className="column">
                <h3>Certifications:</h3>
                <ul>
                    {certifications.map(
                        (item) => <li>{item}</li>
                    )}
                </ul>
            </div>
        </div>
    </main>

}
export default Skills;