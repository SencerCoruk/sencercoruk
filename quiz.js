document.addEventListener('DOMContentLoaded', function() {
    // Elementleri seçme
    const startSection = document.getElementById('quiz-start');
    const questionsSection = document.getElementById('quiz-questions');
    
    const startButton = document.getElementById('start-button');
    const nextButton = document.getElementById('next-button');
    
    const questionText = document.getElementById('question-text');
    
    // İlişki soruları
    const questions = [
        "İlişkimizin sürmesi için tek başınayken yapmaktan mutlu olduğun şeylerden ödün verir misin?",
        "Senin için aldatmanın tanımı nedir?",
        "Seni aldatırsam beni affeder misin?",
        "Yanında ben yokken karşı cinsten biri seninle flört etmek isterse buna karşılık verir misin?",
        "Bir tartışmada, haklı olsan bile beni üzmemek için alttan alır mısın?",
        "İlişkimizde paranın önemi sence nedir?",
        "Beni ilk gördüğünde neler hissetmiştin, şimdi neler hissediyorsun?",
        "Senin için birlikte yaşadığımız en güzel anı hangisi?",
        "Geçmişteki ilişkilerim seni rahatsız ediyor mu? Ediyorsa neden?",
        "Sence birbirimize her şeyi itiraf etmeli miyiz? İtiraflar ilişkiyi güçlendirir mi, zayıflatır mı?",
        "Koşulsuz sevgi senin için ne anlama geliyor?",
        "Beni mutlu etmek için hiç yalan söyledin mi?",
        "Benden sakladığın ama bilmem gerektiğini düşündüğün bir şey var mı?",
        "Sevmediğin arkadaşım var mı? Neden?",
        "Ailem hakkında ne düşünüyorsun?",
        "Çocuk sahibi olma konusunda ne düşünüyorsun?",
        "Bana seksi kadının/erkeğin tarifini yapar mısın?",
        "Bir rahatsızlık nedeniyle bir süre seks yapamayacak olsak, bu ilişkimizi nasıl etkiler?",
        "İş nedeniyle belirli bir süre ayrı kalırsak bekler misin, ayrılır mısın?",
        "Sana \"Şu huyunu sevmiyorum\" deyip gerekçelerini de anlatırsam değiştirmek için uğraşır mısın?",
        "Sevmediğin bir huyum var mı? Neden?",
        "Benimle ilgili en büyük hayalin nedir?",
        "Hayatta en çok korktuğun şey ne ve bu seni neden korkutuyor?",
        "Gerçek aşk senin için ne ifade ediyor?",
        "Hayatta elde ettiğin en büyük başarı ne ve bu başarıya ulaşmak için nasıl fedakarlıklar yaptın?",
        "Bir günlüğüne dünyayı değiştirme şansın olsa ne yapardın?",
        "Geçmişte yaşadığın büyük hayal kırıklığı neydi ve bu sana ne öğretti?",
        "Senin için ideal bir ilişkinin temel özellikleri neler?",
        "Kendi sınırlarını belirlerken seni en çok ne zorladı?",
        "Sana göre hayata gelme amacımız nedir?",
        "Verimli bir gün nasıl ve kiminle geçmeli?",
        "Zor zamanları en az zararla atlatmak için motivasyonun nedir?",
        "Senin için bir ilişkideki en önemli şey sevgi mi yoksa güven mi?",
        "Kariyerinle ilgili en büyük hayalin ne ve bu hedefe ulaşmak için neler yapıyorsun?",
        "İnsanlar arasındaki iletişimi güçlendirmek için kullanabileceğimiz en etkili yöntem nedir?",
        "Geçmişte yaptığın hatalar sana neler öğretti?",
        "Sence insanlar neden sıkıntılarını ve kaygılarını anlamakta zorlanıyorlar?",
        "Hayatında değiştirmek istediğin bir şey var mı? Ne ve neden?",
        "İnsanların senin hakkında yanlış anladığı bir şey var mı? Ne düşündüklerini değiştirmek ister miydin?",
        "En sevdiğin kitap/film/sanat eseri nedir ve neden senin için önemli?",
        "Başkalarının sana nasıl yaklaştığını veya sana değer verip vermediklerini nasıl anlarsın?",
        "Hayatta en çok hayranlık duyduğun kişi kim ve neden?",
        "Kendine koyduğun en önemli değerler nelerdir ve bu değerlere bağlı kalmak senin için neden önemli?",
        "Bir ilişkide kararları nasıl alırsın, ortak kararlar için nasıl bir süreç izlersin?",
        "Hayatta şu ana kadar yaşadığın en unutulmaz an neydi ve neden?",
        "Sevdiklerinle aranda kurduğun anlamlı bağları güçlendirmek için kullandığın en etkili yol ne?",
        
        // Uzak mesafe ilişki soruları
        "Fiziksel temas olmadan aşkı sürdürmek sence ne kadar mümkün?",
        "Bazen özlem duygusu seni ilişkiden uzaklaştırıyor mu, yoksa daha da mı yaklaştırıyor?",
        "Uzak mesafede yaşadığımız en büyük kriz sence neydi ve o an seni en çok ne zorladı?",
        "Beni en çok yanında istediğin ama yanımda olamadığım bir anı hatırlıyor musun?",
        "Seni en çok ne zaman özlediğimi hissediyorsun?",
        "Sesimi duyduğunda ya da mesajımı gördüğünde içinde oluşan ilk duygu ne oluyor?",
        "Yakınında biriyle sık sık vakit geçirmen gerekse, bana bunu söyler misin yoksa sorun çıkmasın diye saklar mısın?",
        "Sana \"yanımda olsaydın her şey farklı olurdu\" desem, içten içe bunu bir suçlama gibi mi hissedersin?",
        "Bana uzakken hiç \"başka biri acaba daha yakın olsaydı?\" diye düşündüğün oldu mu?",
        "Sence bu mesafe bize en çok neyi öğretiyor?",
        "Aynı şehirde olsak ilişki dinamiğimiz sence nasıl olurdu?",
        "Bu sürecin sonunda birbirimize daha çok bağlanacağımıza gerçekten inanıyor musun?"
    ];
    
    let askedQuestionsIndices = [];
    
    // Oyunu başlat
    startButton.addEventListener('click', startQuiz);
    
    // Yeni soru butonu
    nextButton.addEventListener('click', showNextQuestion);
    
    // Soru oyununu başlat
    function startQuiz() {
        startSection.style.display = 'none';
        questionsSection.style.display = 'block';
        showNextQuestion();
    }
    
    // Yeni bir soru göster
    function showNextQuestion() {
        // Animasyon efekti için
        questionText.style.opacity = '0';
        
        setTimeout(() => {
            let randomIndex;
            
            // Tüm sorular sorulduysa listeyi sıfırla
            if (askedQuestionsIndices.length === questions.length) {
                askedQuestionsIndices = [];
            }
            
            // Daha önce sorulmamış bir soru indeksi seç
            do {
                randomIndex = Math.floor(Math.random() * questions.length);
            } while (askedQuestionsIndices.includes(randomIndex));
            
            // Bu soruyu sorulmuş olarak işaretle
            askedQuestionsIndices.push(randomIndex);
            
            // Soruyu göster
            questionText.textContent = questions[randomIndex];
            questionText.classList.add('relationship-question');
            
            // Animasyon ile göster
            questionText.style.opacity = '1';
        }, 300);
    }
}); 