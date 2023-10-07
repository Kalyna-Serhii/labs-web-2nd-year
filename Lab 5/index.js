document.addEventListener("DOMContentLoaded", function() {
    task1();
    task3();
    function task1() {
        const lengthElement = document.querySelector('#length');
        const widthElement = document.querySelector('#width');

        lengthElement.addEventListener('input', updateValue);
        widthElement.addEventListener('input', updateValue);

        function updateValue() {
            const length = parseFloat(lengthElement.value);
            const width = parseFloat(widthElement.value);
            const perimeterElement = document.querySelector('#perimeter');
            const areaElement = document.querySelector('#area');
            const diagonalElement = document.querySelector('#diagonal');
            if (length <= 0 || width <= 0) {
                perimeterElement.textContent = 'Введіть коректні дані';
                areaElement.textContent = '';
                diagonalElement.textContent = ' ';
                return;
            }
            const perimeter = (length + width) * 2;
            const area = length * width;
            const diagonal = Math.sqrt(length ** 2 + width ** 2);

            perimeterElement.textContent = perimeter || '';
            areaElement.textContent = area || '';
            diagonalElement.textContent = diagonal || '';
        }
    }

    function task3() {
        const ukrainianInputElement = document.querySelector('#UkrainianInput');
        const transliterationOutputElement = document.querySelector('#transliterationOutput');
        ukrainianInputElement.addEventListener('input', function () {
            const ukrainianInput = ukrainianInputElement.value;
            transliterationOutputElement.textContent = translate(ukrainianInput);
            function translate(text) {
                const transliterationMap = {
                    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'h', 'ґ': 'g', 'д': 'd', 'е': 'e', 'є': 'ie', 'ж': 'zh',
                    'з': 'z', 'и': 'y', 'і': 'i', 'ї': 'i', 'й': 'i', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
                    'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'kh', 'ц': 'ts',
                    'ч': 'ch', 'ш': 'sh', 'щ': 'shch', 'ь': "'", 'ю': 'iu', 'я': 'ia',
                    'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'H', 'Ґ': 'G', 'Д': 'D', 'Е': 'E', 'Є': 'IE', 'Ж': 'ZH',
                    'З': 'Z', 'И': 'Y', 'І': 'I', 'Ї': 'I', 'Й': 'I', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N',
                    'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T', 'У': 'U', 'Ф': 'F', 'Х': 'KH', 'Ц': 'TS',
                    'Ч': 'CH', 'Ш': 'SH', 'Щ': 'SHCH', 'Ь': "'", 'Ю': 'IU', 'Я': 'IA'
                };
                return text.replace(/[а-яА-ЯґҐєЄіІїЇь]/g, function(char) {
                    return transliterationMap[char] || char;
                });
            }
        });
    }
});