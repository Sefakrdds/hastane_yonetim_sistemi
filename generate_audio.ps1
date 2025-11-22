Add-Type -AssemblyName System.Speech
$synth = New-Object System.Speech.Synthesis.SpeechSynthesizer

# Configure voice - try to find a female voice or fallback to default
$voices = $synth.GetInstalledVoices()
$femaleVoice = $voices | Where-Object { $_.VoiceInfo.Gender -eq 'Female' } | Select-Object -First 1

if ($femaleVoice) {
    $synth.SelectVoice($femaleVoice.VoiceInfo.Name)
}

$text = @"
Sağlık hizmetlerine ulaşmak hiç bu kadar kolay olmamıştı. Karşınızda, yeni nesil Hastane Randevu Yönetim Sistemi.

Hastalarımız için geliştirdiğimiz kullanıcı dostu arayüz ile saniyeler içinde sisteme giriş yapabilirsiniz. İhtiyacınız olan uzmanı bulmak için gelişmiş arama motorumuzu kullanın. İster isme göre, ister branşa göre filtreleme yapın.

Size en uygun zamanı seçmek artık parmaklarınızın ucunda. Doktorunuzun müsaitlik durumunu anlık olarak görüntüleyin, tarih ve saati seçin, randevunuzu tek tıkla onaylayın. İşte bu kadar basit!

Doktorlarımız için özel olarak tasarlanan panel sayesinde, haftalık programınızı yönetmek zahmetsiz hale geliyor. Randevularınızı takip edin, hasta detaylarına anında ulaşın ve zamanınızı en verimli şekilde kullanın.

Hastane yöneticileri için sunduğumuz kapsamlı dashboard ile tüm operasyon kontrol altında. Toplam randevu sayıları, aktif doktorlar ve hasta istatistiklerini tek ekranda görüntüleyin. Kurumunuzun verimliliğini artırın.

Modern, hızlı ve güvenilir. Hastane Yönetim Sistemi ile sağlık teknolojilerinde geleceği yakalayın.
"@

$outputFile = "$PWD\voiceover.wav"
$synth.SetOutputToWaveFile($outputFile)
$synth.Speak($text)
$synth.SetOutputToNull()

Write-Host "Audio generated at: $outputFile"
