# ionic-tracker
app track ionic blank android e browser

# pre-requisitos

-Win8

* git
* node
* ruby
* compass gem
* adt android - http://developer.android.com/sdk/index.html#downloads


------------
legenda:
_ : espaço em branco
+ : apenas concatenando comandos(não incluir "+" nas msgs de configuração )
telefone: codigo do pais + codigo ddd + numero
senha: 6 digitos numéricos

------------

Mapping Features TK103B > http://bomsom.com/manual_2015.pdf

##Led indicadora de Sinais GSM / GPS
>  indicador LED vermelho acesa: Indica nenhum sinal da rede GSM.
>  indicador LED vermelho piscando rapidamente (uma vez a cada segundo): Sinal GSM OK e rastreador funciona em modo GSM.
>  indicador LED vermelho pisca lentamente (uma vez a cada três segundo): Apenas para redes em modo GPRS.
>  indicador LED Verde Aceso: Ssinal de GPS é normal.


## Configurações

*Inicialização
> begin+senha
< password ok

*Alterar Senha
> password+senhaatual+_+novasenha
< password ok

*Adicionar numero 
> admin+senha+_+telefone
< admin ok

*Remover numero
> noadmin+senha+_+telefone

*Autorizar numero master
> call number of module track 10x
< add master ok

*Intervalo de Rastreamento - tempo e quantidade
> fix030s005n         (s=seg,m=min, h=hr, n=total vezes) envio de 30 segundos 5 vezes
> fix030s***n         (s=seg,m=min, h=hr, n=total vezes) envio de 30 segundos ilimitado
> nofix+senha 		  (desabilita intervalos de comunicação)

*Intervalo de Rastreamento - distancia
> distance+senha+_+0100 (envia posições a cada 100 metros)

*Intervalo de Rastreamento - angulo
> angle+senha+_+045 (envia posição a cada mudança de 45 graus)

*Listener Bateria Baixa
> lowbattery+senha+_+on
> lowbattery+senha+_+off

*Ativar/Inativar GPS
> suppress+senha (inativa gps)
> nosuppress+senha (ativa gps)

*Listener Bateria Veículo Desconectada
> extpower+senha+_+on
> extpower+senha+_+off

*Listener GPS Inoperante
> gpssignal+senha+_+on
> gpssignal+senha+_+off

*Listener Saldo SIM Chip
> balance+senha+_+telefone+code (ex code: Vivo 15, Tim 41, etc)

*Listener Velocidade Maxima
> speed+senha+_+080 (velocidade max 80km - 3 digitos)
> nospeed+senha (desativar sensor de velocidade maxima)

*Listeter Ignição Ligada/Pós chave
> ACC+senha (ativar)
> noACC+senha (desativar)

*Listener Numero IMEI
> imei+senha

*Set Corta Corrente Imediato
> quicksatop+senha (ativa)
> noquickstop+senha (inativa)

*Set APN IP
> adminip+senha+_+ip+_+porta (porta de 4 digitos)

*Set APN User-Pws
> up+senha+_+usuario+_+senha

*Set Min Trafego GPRS
> less+gprs+senha+on
> less+gprs+senha+off

*Set Min Consumo Bateria
> sleep+senha+_+on
> sleep+senha+_+off

*Set GPRS use
> GPRS+senha

*Set SMS use
> SMS+senha

*Check Status
> check+senha

*Set Time Zone
> time+_+zone+senha+_+UTC (ex: UTC brasilia é -3)

*Reset default
> reset+senha

*Sirene Silenciosa
> silent+senha
> disarm+senha

## Acionadores

*Posição SMS
> call number of module track
< posicion sms

*Monitorar Audio
> monitor+senha (desativa rastreamento e ativa monitor de audio)
> tracker+senha (ativa rastreamento e desativa monitor de audio)

*Ativar Pânico
> botão ou controle

*Desativar Pânico
> help+_+me+_+ok+senha

*Ativar Corta Corrente
> stop+senha
> resume+senha

*Ativar Alarme
>arm+senha
>disarm+senha