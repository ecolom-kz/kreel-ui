# BitAktif Kısa Satışı

KREEL'le temasınızı arttırmak ve USD,EUR,GOLD gibi BitAktiflere likidite sağlamak için
bu BitAktifleri ağdan *ödünç* alabilir ve *kısa satabilirsiniz*. Prosedürü burada kısaca
anlatacağız.

## Ödünç Alma

Graphene ağının herhangi bir miktarda BitVarlığı piyasaya sürmesi ve yeterli teminat
karşılığında katılımcılara borç vermesi mümkündür.

 * *uzlaşma fiyatı* : 1 KREEL in dış borsalarda alıp-satılırkenki fiyatı.
 * *idame teminat oranı* (MCR) :  zorunlu minimum teminat oranı
 * *maksimum kısa sıkıştırma oranı* (MSQR) : Tanıklar tarafından kısaların kısa sıkıştırmalara karşı nereye kadar korunacaklarını belirleyen oran.
 * *kısa sıkıştırmadan korunma* (SQP) : Marjin pozisyonuna ödettirilebilecek en yüksek
 * *çağrı fiyatı* (cp):   Kısa/ödünç pozisyonlarının marjin çağrıldığı fiyat.

### Marjin Çağrısı ( Teminat Tamamlama Çağrısı)

Graphene ağı , ödünç aldığı bitVarlığın karşılığında yeterince teminatı bulunmayan
pozisyonları teminatı tamamlamaları için çağırabilir. Marjin çağrısı , en yüksek alış fiyat
teklifinin *çağrı fiyatından* az , ve *SQP* dan büyük olduğu herhangi bir anda
meydana gelebilir.
Marjin pozisyonu, teminatı satın almaya verilen en yüksek teklifin çağrı
fiyatından(x/KREEL) daha düşük olduğu anda teminatı zorla sattırılır.

    SQP =  uzlaşma fiyatı / MSQR
    çağrı fiyatı = BORÇ / TEMİNAT * MCR

Marjin çağrısı teminatı alır , ödünç alınmış bitaktif hisselerinin SQP ya kadarki kısmını
piyasa fiyatından satın alır ve pozisyonu kapar. Teminattan geri kalan KREEL müşteriye
iade edilir.

### Hesap görme

Her bitaktif sahibi istediği zaman *adil bir fiyattan* hesap görmeyi talep edebilir.
Hesap görme işlemi, ödünç/kısa pozisyonlarını en düşük teminat oranıyla kapar ve
hesap görmek üzere teminatı satar.

## Satış

BitAktif ödünç alındıktan sonra alakalı piyasalardan herhangi birinde herhangi
bir fiyattan satılabilir . Bu aşamayla ,  kısa-satış tamamlanmış olur ve o bitaktif da kısa
olursunuz.

## Teminat Oranını Güncellemek

Ödünç/kısa pozisyonu tutan kişi , herhangi bir zamanda , piyasa
davranışını esnek bir biçimde ayarlamak için teminat oranını değiştirebilir. Eğer
teminat oranı arttırılırsa , ilave miktarda KREEL teminat olarak kilit altına alınır, teminat
oranının düşürülmesi ise tekabül eden miktarda BitVarlığın ağa geri ödenmesini
gerektirir.

## Kapamak

Ödünç/kısa pozisyonunu kapamak için , ilk önce kişinin , Graphene ağına teslim
etmek üzere o Bitvarlığın ödünç alınan miktarda elinde bulunması gerekir. Ondan
sonra , BitAktifler arz stoğundan düşer ve teminat serbest bırakılıp sahibine geri
verilir.