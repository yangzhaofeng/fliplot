import { parseWith_vcdvcd } from "../parse_vcd.js"

const vcd_file = `$date
   2018-03-21 20:20:48.479224
$end
$timescale 1ps $end
$scope module EpWithReg $end
$var wire 3 ! bus_aw_prot $end
$var wire 1 " sig_ep_bus_r_valid $end
$var wire 1 # sig_reg_out_m_ar_valid $end
$var wire 1 $ bus_aw_ready $end
$var wire 32 % sig_ep_bus_w_data $end
$var wire 32 & sig_reg_out_m_aw_addr $end
$var wire 1 ' bus_aw_valid $end
$var wire 1 ( sig_ep_bus_w_ready $end
$var wire 3 ) sig_reg_out_m_aw_prot $end
$var wire 1 * bus_b_ready $end
$var wire 4 + sig_ep_bus_w_strb $end
$var wire 1 , sig_reg_out_m_aw_ready $end
$var wire 2 - bus_b_resp $end
$var wire 1 . sig_ep_bus_w_valid $end
$var wire 1 / sig_reg_out_m_aw_valid $end
$var wire 1 0 bus_b_valid $end
$var wire 1 1 sig_ep_clk $end
$var wire 1 2 sig_reg_out_m_b_ready $end
$var wire 32 3 bus_r_data $end
$var wire 32 4 sig_ep_decoded_field0_din $end
$var wire 2 5 sig_reg_out_m_b_resp $end
$var wire 1 6 bus_r_ready $end
$var wire 32 7 sig_ep_decoded_field0_dout_data $end
$var wire 1 8 sig_reg_out_m_b_valid $end
$var wire 2 9 bus_r_resp $end
$var wire 1 : sig_ep_decoded_field0_dout_vld $end
$var wire 32 ; sig_reg_out_m_r_data $end
$var wire 1 < bus_r_valid $end
$var wire 32 = sig_ep_decoded_field1_din $end
$var wire 1 > sig_reg_out_m_r_ready $end
$var wire 32 ? bus_w_data $end
$var wire 32 @ sig_ep_decoded_field1_dout_data $end
$var wire 2 A sig_reg_out_m_r_resp $end
$var wire 1 B bus_w_ready $end
$var wire 1 C sig_ep_decoded_field1_dout_vld $end
$var wire 1 D sig_reg_out_m_r_valid $end
$var wire 4 E bus_w_strb $end
$var wire 1 F sig_ep_rst_n $end
$var wire 32 G sig_reg_out_m_w_data $end
$var wire 1 H bus_w_valid $end
$var wire 1 I sig_reg_clk $end
$var wire 1 J sig_reg_out_m_w_ready $end
$var wire 1 K clk $end
$var wire 32 L sig_reg_in_s_ar_addr $end
$var wire 4 M sig_reg_out_m_w_strb $end
$var wire 32 N decoded_field0_din $end
$var wire 3 O sig_reg_in_s_ar_prot $end
$var wire 1 P sig_reg_out_m_w_valid $end
$var wire 32 Q decoded_field0_dout_data $end
$var wire 1 R sig_reg_in_s_ar_ready $end
$var wire 1 S sig_reg_rst_n $end
$var wire 1 T sig_reg_in_s_ar_valid $end
$var wire 1 U decoded_field0_dout_vld $end
$var wire 32 V decoded_field1_din $end
$var wire 32 W sig_reg_in_s_aw_addr $end
$var wire 32 X decoded_field1_dout_data $end
$var wire 3 Y sig_reg_in_s_aw_prot $end
$var wire 1 Z decoded_field1_dout_vld $end
$var wire 1 [ sig_reg_in_s_aw_ready $end
$var wire 1 \ rst_n $end
$var wire 1 ] sig_reg_in_s_aw_valid $end
$var wire 32 ^ sig_ep_bus_ar_addr $end
$var wire 1 _ sig_reg_in_s_b_ready $end
$var wire 3 \` sig_ep_bus_ar_prot $end
$var wire 2 a sig_reg_in_s_b_resp $end
$var wire 1 b sig_ep_bus_ar_ready $end
$var wire 1 c sig_reg_in_s_b_valid $end
$var wire 1 d sig_ep_bus_ar_valid $end
$var wire 32 e sig_reg_in_s_r_data $end
$var wire 32 f sig_ep_bus_aw_addr $end
$var wire 1 g sig_reg_in_s_r_ready $end
$var wire 3 h sig_ep_bus_aw_prot $end
$var wire 2 i sig_reg_in_s_r_resp $end
$var wire 1 j sig_ep_bus_aw_ready $end
$var wire 1 k sig_reg_in_s_r_valid $end
$var wire 1 l sig_ep_bus_aw_valid $end
$var wire 32 m sig_reg_in_s_w_data $end
$var wire 1 n sig_ep_bus_b_ready $end
$var wire 1 o sig_reg_in_s_w_ready $end
$var wire 2 p sig_ep_bus_b_resp $end
$var wire 4 q sig_reg_in_s_w_strb $end
$var wire 1 r sig_ep_bus_b_valid $end
$var wire 1 s sig_reg_in_s_w_valid $end
$var wire 32 t sig_ep_bus_r_data $end
$var wire 32 u sig_reg_out_m_ar_addr $end
$var wire 1 v sig_ep_bus_r_ready $end
$var wire 3 w sig_reg_out_m_ar_prot $end
$var wire 1 x sig_reg_out_m_ar_ready $end
$var wire 2 y sig_ep_bus_r_resp $end
$var wire 32 z bus_ar_addr $end
$var wire 3 { bus_ar_prot $end
$var wire 1 | bus_ar_ready $end
$var wire 1 } bus_ar_valid $end
$var wire 32 ~ bus_aw_addr $end
$scope module ep $end
$var wire 1 "! isBramAddr $end
$var real 1 "" rSt $end
$var real 1 "# rSt_next $end
$var real 1 "$ wSt $end
$var real 1 "% wSt_next $end
$var wire 1 "& w_hs $end
$var wire 32 "' arAddr $end
$var wire 32 "( arAddr_next $end
$var wire 32 ") awAddr $end
$var wire 32 "* awAddr_next $end
$upscope $end
$scope module reg $end
$var wire 1 "+ sig_gen_ar_reg_0_clk $end
$var wire 32 ", sig_gen_ar_reg_0_dataIn_addr $end
$var wire 3 "- sig_gen_ar_reg_0_dataIn_prot $end
$var wire 1 ". sig_gen_ar_reg_0_dataIn_ready $end
$var wire 1 "/ sig_gen_ar_reg_0_dataIn_valid $end
$var wire 32 "0 sig_gen_ar_reg_0_dataOut_addr $end
$var wire 3 "1 sig_gen_ar_reg_0_dataOut_prot $end
$var wire 1 "2 sig_gen_ar_reg_0_dataOut_ready $end
$var wire 1 "3 sig_gen_ar_reg_0_dataOut_valid $end
$var wire 1 "4 sig_gen_ar_reg_0_rst_n $end
$var wire 1 "5 sig_gen_aw_reg_0_clk $end
$var wire 32 "6 sig_gen_aw_reg_0_dataIn_addr $end
$var wire 3 "7 sig_gen_aw_reg_0_dataIn_prot $end
$var wire 1 "8 sig_gen_aw_reg_0_dataIn_ready $end
$var wire 1 "9 sig_gen_aw_reg_0_dataIn_valid $end
$var wire 32 ": sig_gen_aw_reg_0_dataOut_addr $end
$var wire 3 "; sig_gen_aw_reg_0_dataOut_prot $end
$var wire 1 "< sig_gen_aw_reg_0_dataOut_ready $end
$var wire 1 "= sig_gen_aw_reg_0_dataOut_valid $end
$var wire 1 "> sig_gen_aw_reg_0_rst_n $end
$var wire 1 "? sig_gen_b_reg_0_clk $end
$var wire 1 "@ sig_gen_b_reg_0_dataIn_ready $end
$var wire 2 "A sig_gen_b_reg_0_dataIn_resp $end
$var wire 1 "B sig_gen_b_reg_0_dataIn_valid $end
$var wire 1 "C sig_gen_b_reg_0_dataOut_ready $end
$var wire 2 "D sig_gen_b_reg_0_dataOut_resp $end
$var wire 1 "E sig_gen_b_reg_0_dataOut_valid $end
$var wire 1 "F sig_gen_b_reg_0_rst_n $end
$var wire 1 "G sig_gen_r_reg_0_clk $end
$var wire 32 "H sig_gen_r_reg_0_dataIn_data $end
$var wire 1 "I sig_gen_r_reg_0_dataIn_ready $end
$var wire 2 "J sig_gen_r_reg_0_dataIn_resp $end
$var wire 1 "K sig_gen_r_reg_0_dataIn_valid $end
$var wire 32 "L sig_gen_r_reg_0_dataOut_data $end
$var wire 1 "M sig_gen_r_reg_0_dataOut_ready $end
$var wire 2 "N sig_gen_r_reg_0_dataOut_resp $end
$var wire 1 "O sig_gen_r_reg_0_dataOut_valid $end
$var wire 1 "P sig_gen_r_reg_0_rst_n $end
$var wire 1 "Q sig_gen_w_reg_0_clk $end
$var wire 32 "R sig_gen_w_reg_0_dataIn_data $end
$var wire 1 "S sig_gen_w_reg_0_dataIn_ready $end
$var wire 4 "T sig_gen_w_reg_0_dataIn_strb $end
$var wire 1 "U sig_gen_w_reg_0_dataIn_valid $end
$var wire 32 "V sig_gen_w_reg_0_dataOut_data $end
$var wire 1 "W sig_gen_w_reg_0_dataOut_ready $end
$var wire 4 "X sig_gen_w_reg_0_dataOut_strb $end
$var wire 1 "Y sig_gen_w_reg_0_dataOut_valid $end
$var wire 1 "Z sig_gen_w_reg_0_rst_n $end
$scope module gen_ar_reg_0 $end
$var wire 1 "[ latency1_reg_we $end
$var wire 1 "\ latency1_isOccupied_next $end
$var wire 3 "] latency1_reg_prot_next $end
$var wire 1 "^ latency1_isOccupied $end
$var wire 3 "_ latency1_reg_prot $end
$var wire 32 "\` latency1_reg_addr_next $end
$var wire 32 "a latency1_reg_addr $end
$upscope $end
$scope module gen_aw_reg_0 $end
$var wire 32 "b latency1_reg_addr $end
$var wire 1 "c latency1_reg_we $end
$var wire 1 "d latency1_isOccupied_next $end
$var wire 3 "e latency1_reg_prot_next $end
$var wire 1 "f latency1_isOccupied $end
$var wire 3 "g latency1_reg_prot $end
$var wire 32 "h latency1_reg_addr_next $end
$upscope $end
$scope module gen_b_reg_0 $end
$var wire 1 "i latency1_reg_we $end
$var wire 1 "j latency1_isOccupied $end
$var wire 1 "k latency1_isOccupied_next $end
$var wire 2 "l latency1_reg_resp $end
$var wire 2 "m latency1_reg_resp_next $end
$upscope $end
$scope module gen_r_reg_0 $end
$var wire 1 "n latency1_reg_we $end
$var wire 2 "o latency1_reg_resp_next $end
$var wire 1 "p latency1_isOccupied_next $end
$var wire 2 "q latency1_reg_resp $end
$var wire 1 "r latency1_isOccupied $end
$var wire 32 "s latency1_reg_data $end
$var wire 32 "t latency1_reg_data_next $end
$upscope $end
$scope module gen_w_reg_0 $end
$var wire 32 "u latency1_reg_data_next $end
$var wire 4 "v latency1_reg_strb_next $end
$var wire 32 "w latency1_reg_data $end
$var wire 1 "x latency1_isOccupied_next $end
$var wire 1 "y latency1_reg_we $end
$var wire 1 "z latency1_isOccupied $end
$var wire 4 "{ latency1_reg_strb $end
$upscope $end
$upscope $end
$upscope $end
$enddefinitions $end
#0
srdIdle ""
srdIdle "#
swrIdle "$
swrIdle "%
0"^
0"f
0"j
0"r
0"z
0K
0\
0"
1j
0r
0(
0"&
0"!
1".
0"3
1"8
0"=
1"@
0"E
1"I
0"O
1"S
0"Y
01
0F
0I
0S
0D
1,
08
0J
0:
0C
1b
1R
0#
1[
0/
12
0c
1>
0k
1o
0P
0"G
0"5
0"+
0"Q
0"?
0"4
0"Z
0"P
0">
0"F
0"K
1"<
0"B
0"W
0U
0Z
1x
1|
0d
1$
0l
1n
00
1v
0<
1B
0.
0"p
0"n
0"k
0"i
1"2
#2500
0'
06
0*
0]
0g
0_
0"9
0"M
0"C
0"d
0"c
#5000
1K
b00000000000000000000000001100100 ?
b1111 E
0H
0}
11
1I
b00000000000000000000000001100100 m
b1111 q
0s
0T
1"G
1"5
1"+
1"Q
1"?
b00000000000000000000000001100100 "R
b1111 "T
0"U
0"/
0"y
0"x
0"\
0"[
#6000
1\
1S
1F
1"4
1"Z
1"P
1">
1"F
#10000
0K
01
0I
0"G
0"5
0"+
0"Q
0"?
#15000
1K
b00000000000000000000000000000000 ~
b000 !
1'
1H
16
11
1I
b00000000000000000000000000000000 W
b000 Y
1]
1s
1g
1"G
1"5
1"+
1"Q
1"?
b00000000000000000000000000000000 "6
b000 "7
1"9
1"U
1"M
1"d
1"c
1"y
1"x
b000 "e
b00000000000000000000000000000000 "h
b1111 "v
b00000000000000000000000001100100 "u
1"f
b000 "g
b00000000000000000000000000000000 "b
1"z
b1111 "{
b00000000000000000000000001100100 "w
1"=
b000 ";
b00000000000000000000000000000000 ":
0"S
1"Y
0"y
b1111 "X
b00000000000000000000000001100100 "V
1/
b000 )
b00000000000000000000000000000000 &
0o
1P
b1111 M
b00000000000000000000000001100100 G
1l
b000 h
b00000000000000000000000000000000 f
0B
1.
b1111 +
b00000000000000000000000001100100 %
swrData "%
b00000000000000000000000000000000 "*
b00000000000000000000000001100100 7
b00000000000000000000000001100100 @
b00000000000000000000000001100100 Q
b00000000000000000000000001100100 X
#20000
0K
01
0I
0"G
0"5
0"+
0"Q
0"?
#22500
0H
0'
0s
0]
0"U
0"9
0"d
0"c
#25000
1K
b00000000000000000000000000000100 ~
1'
11
1I
b00000000000000000000000000000100 W
1]
1"G
1"5
1"+
1"Q
1"?
b00000000000000000000000000000100 "6
1"9
1"d
1"c
b00000000000000000000000000000100 "h
swrData "$
b00000000000000000000000000000000 ")
b00000000000000000000000000000100 "b
0j
swrResp "%
1(
1"&
b00 p
b00000000000000000000000000000100 ":
0,
1J
1:
0b
b00 5
b00000000000000000000000000000100 &
0"<
1"W
1U
0x
b00 "A
b00000000000000000000000000000100 f
0"8
0"c
1"S
0"x
0"2
0[
1o
0$
1B
#30000
0K
01
0I
0"G
0"5
0"+
0"Q
0"?
#32500
06
0'
0g
0]
0"M
0"9
#35000
1K
1*
11
1I
1_
1"G
1"5
1"+
1"Q
1"?
1"C
swrResp "$
0"z
swrIdle "%
1r
0(
0"&
0"Y
18
0J
0:
1b
0P
1"B
0"W
0U
1x
0.
1"k
1"i
1"2
b00 "m
#40000
0K
01
0I
0"G
0"5
0"+
0"Q
0"?
#42500
0*
0_
0"C
#45000
1K
11
1I
1"G
1"5
1"+
1"Q
1"?
swrIdle "$
b00 "l
1"j
1j
swrData "%
0r
b00000000000000000000000000000100 "*
b00 "D
0"@
1"E
0"i
1,
08
b00 a
02
1c
1"<
0"B
b00 -
0n
10
0"d
1"8
1[
1$
#50000
0K
01
0I
0"G
0"5
0"+
0"Q
0"?
#55000
1K
b00000000000000000000000000000000 ~
1'
b00000000000000000000000001100101 ?
1H
1*
11
1I
b00000000000000000000000000000000 W
1]
b00000000000000000000000001100101 m
1s
1_
1"G
1"5
1"+
1"Q
1"?
b00000000000000000000000000000000 "6
1"9
b00000000000000000000000001100101 "R
1"U
1"C
1"d
1"c
1"y
1"x
0"k
1"@
b00000000000000000000000000000000 "h
b00000000000000000000000001100101 "u
12
1n
swrData "$
b00000000000000000000000000000100 ")
b00000000000000000000000000000000 "b
1"z
b00000000000000000000000001100101 "w
0"j
0j
1(
b00000000000000000000000000000000 ":
0"S
1"Y
0"y
b00000000000000000000000001100101 "V
0"E
0,
1J
b00000000000000000000000000000000 &
0o
1P
b00000000000000000000000001100101 G
0c
0"<
1"W
b00000000000000000000000000000000 f
0B
1.
b00000000000000000000000001100101 %
00
0"8
0"c
1"S
1"y
1"&
swrResp "%
b00000000000000000000000001100101 7
b00000000000000000000000001100101 @
0[
1o
1C
0b
b00000000000000000000000001100101 Q
b00000000000000000000000001100101 X
0$
1B
1Z
0x
0"2
#60000
0K
01
0I
0"G
0"5
0"+
0"Q
0"?
#62500
0*
0'
0H
0_
0]
0s
0"C
0"9
0"U
0"y
0"x
#65000
1K
16
11
1I
1g
1"G
1"5
1"+
1"Q
1"?
1"M
swrResp "$
0"z
swrIdle "%
1r
0(
0"&
0"Y
18
0J
0C
1b
0P
1"B
0"W
0Z
1x
0.
1"k
1"i
1"2
#70000
0K
01
0I
0"G
0"5
0"+
0"Q
0"?
#72500
06
0g
0"M
#75000
1K
b00000000000000000000000000000100 ~
1'
16
b00000000000000000000000001100110 ?
1H
1*
11
1I
b00000000000000000000000000000100 W
1]
1g
b00000000000000000000000001100110 m
1s
1_
1"G
1"5
1"+
1"Q
1"?
b00000000000000000000000000000100 "6
1"9
1"M
b00000000000000000000000001100110 "R
1"U
1"C
1"y
1"x
b00000000000000000000000001100110 "u
swrIdle "$
1"z
b00000000000000000000000001100110 "w
1"j
1j
swrData "%
0r
b00000000000000000000000000000000 "*
0"S
1"Y
0"y
b00000000000000000000000001100110 "V
1"E
1,
08
0o
1P
b00000000000000000000000001100110 G
1c
1"<
0"B
0B
1.
b00000000000000000000000001100110 %
10
1"8
1"c
0"k
0"i
b00000000000000000000000001100110 7
b00000000000000000000000001100110 @
1[
b00000000000000000000000000000100 "h
b00000000000000000000000001100110 Q
b00000000000000000000000001100110 X
1$
#80000
0K
01
0I
0"G
0"5
0"+
0"Q
0"?
#82500
0'
0*
0H
0]
0_
0s
0"9
0"C
0"U
0"d
0"c
1"k
0"@
b00000000000000000000000000000000 "h
02
0n
#85000
1K
1'
b00000000000000000000000001100111 ?
1H
11
1I
1]
b00000000000000000000000001100111 m
1s
1"G
1"5
1"+
1"Q
1"?
1"9
b00000000000000000000000001100111 "R
1"U
1"d
1"c
b00000000000000000000000000000100 "h
swrData "$
b00000000000000000000000000000000 ")
b00000000000000000000000000000100 "b
0j
swrResp "%
1(
1"&
b00000000000000000000000000000100 ":
0,
1J
1:
0b
b00000000000000000000000000000100 &
0"<
1"W
1U
0x
b00000000000000000000000000000100 f
0"8
0"c
1"S
1"y
0"2
0[
1o
b00000000000000000000000001100111 "u
0$
1B
#90000
0K
01
0I
0"G
0"5
0"+
0"Q
0"?
#92500
0'
06
0]
0g
0"9
0"M
#95000
1K
1*
11
1I
1_
1"G
1"5
1"+
1"Q
1"?
1"C
0"k
1"@
12
1n
swrResp "$
b00000000000000000000000001100111 "w
0"j
swrIdle "%
1r
0(
0"&
b00000000000000000000000001100111 "V
0"E
18
0J
0:
1b
b00000000000000000000000001100111 G
0c
1"B
0"W
0U
1x
b00000000000000000000000001100111 %
00
1"k
1"i
0"S
0"y
1"2
b00000000000000000000000001100111 7
b00000000000000000000000001100111 @
0o
b00000000000000000000000001100111 Q
b00000000000000000000000001100111 X
0B
#100000
0K
01
0I
0"G
0"5
0"+
0"Q
0"?
#102500
0*
0H
0_
0s
0"C
0"U
#105000
1K
11
1I
1"G
1"5
1"+
1"Q
1"?
swrIdle "$
1"j
1j
swrData "%
0r
b00000000000000000000000000000100 "*
0"@
1"E
0"i
1,
08
02
1c
1"<
0"B
0n
10
0"d
1"8
1[
1$
#110000
0K
01
0I
0"G
0"5
0"+
0"Q
0"?
#115000
1K
b00000000000000000000000000001000 ~
1'
b00000000000000000000000001101000 ?
1H
1*
11
1I
b00000000000000000000000000001000 W
1]
b00000000000000000000000001101000 m
1s
1_
1"G
1"5
1"+
1"Q
1"?
b00000000000000000000000000001000 "6
1"9
b00000000000000000000000001101000 "R
1"U
1"C
1"d
1"c
0"k
1"@
b00000000000000000000000000001000 "h
12
1n
swrData "$
b00000000000000000000000000000100 ")
b00000000000000000000000000001000 "b
0"j
0j
swrResp "%
1(
1"&
b00000000000000000000000000001000 ":
0"E
0,
1J
1C
0b
b00000000000000000000000000001000 &
0c
0"<
1"W
1Z
0x
b00000000000000000000000000001000 f
00
0"8
0"c
1"S
1"y
0"2
0[
1o
b00000000000000000000000001101000 "u
0$
1B
#120000
0K
01
0I
0"G
0"5
0"+
0"Q
0"?
#122500
0*
0'
0_
0]
0"C
0"9
#125000
1K
bXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX ~
bXXX !
16
1*
11
1I
bXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX W
bXXX Y
1g
1_
1"G
1"5
1"+
1"Q
1"?
bXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX "6
bXXX "7
1"M
1"C
swrResp "$
b00000000000000000000000001101000 "w
swrIdle "%
1r
0(
0"&
b00000000000000000000000001101000 "V
18
0J
0C
1b
b00000000000000000000000001101000 G
1"B
0"W
0Z
1x
b00000000000000000000000001101000 %
1"k
1"i
0"S
0"y
1"2
b00000000000000000000000001101000 7
b00000000000000000000000001101000 @
0o
b00000000000000000000000001101000 Q
b00000000000000000000000001101000 X
0B
#130000
0K
01
0I
0"G
0"5
0"+
0"Q
0"?
#132500
0H
0*
0s
0_
0"U
0"C
#135000
1K
11
1I
1"G
1"5
1"+
1"Q
1"?
swrIdle "$
1"j
1j
swrData "%
0r
b00000000000000000000000000001000 "*
0"@
1"E
0"i
1,
08
02
1c
1"<
0"B
0n
10
0"d
1"8
1[
1$
#140000
0K
01
0I
0"G
0"5
0"+
0"Q
0"?
#145000
1K
11
1I
1"G
1"5
1"+
1"Q
1"?
swrData "$
b00000000000000000000000000001000 ")
0"f
0j
swrResp "%
1(
1"&
b10 p
0"=
0,
1J
0b
b10 5
0/
0"<
1"W
0x
b10 "A
0l
1"S
0"x
0"2
1o
1B
#150000
0K
01
0I
0"G
0"5
0"+
0"Q
0"?
#155000
1K
bXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX ?
bXXXX E
11
1I
bXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX m
bXXXX q
1"G
1"5
1"+
1"Q
1"?
bXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX "R
bXXXX "T
swrResp "$
0"z
1r
0(
0"&
0"Y
18
0J
1b
0P
1"B
0"W
1x
0.
1"2
#160000
0K
01
0I
0"G
0"5
0"+
0"Q
0"?
#165000
1K
11
1I
1"G
1"5
1"+
1"Q
1"?
#170000
0K
01
0I
0"G
0"5
0"+
0"Q
0"?
#172500
06
0g
0"M
#175000
1K
1*
16
11
1I
1_
1g
1"G
1"5
1"+
1"Q
1"?
1"C
1"M
1"@
1"i
12
b10 "m
1n
swrIdle "%
swrIdle "$
b10 "l
1j
0r
b10 "D
1,
08
b10 a
1"<
0"B
b10 -
0"k
0"i
#180000
0K
01
0I
0"G
0"5
0"+
0"Q
0"?
#182500
0*
0_
0"C
1"k
0"@
02
0n
#185000
1K
11
1I
1"G
1"5
1"+
1"Q
1"?
#190000
0K
01
0I
0"G
0"5
0"+
0"Q
0"?
#192500
06
0g
0"M
#195000
1K
1*
11
1I
1_
1"G
1"5
1"+
1"Q
1"?
1"C
0"k
1"@
12
1n
0"j
0"E
0c
00
#200000
0K
01
0I
0"G
0"5
0"+
0"Q
0"?
#202500
0*
0_
0"C
#205000
1K
11
1I
1"G
1"5
1"+
1"Q
1"?
#210000
0K
01
0I
0"G
0"5
0"+
0"Q
0"?
#215000
1K
1*
11
1I
1_
1"G
1"5
1"+
1"Q
1"?
1"C
#220000
0K
01
0I
0"G
0"5
0"+
0"Q
0"?
#222500
0*
0_
0"C
#225000
1K
16
11
1I
1g
1"G
1"5
1"+
1"Q
1"?
1"M
#230000
0K
01
0I
0"G
0"5
0"+
0"Q
0"?
#235000
1K
1*
11
1I
1_
1"G
1"5
1"+
1"Q
1"?
1"C
#240000
0K
01
0I
0"G
0"5
0"+
0"Q
0"?
#242500
06
0*
0g
0_
0"M
0"C
#245000
1K
11
1I
1"G
1"5
1"+
1"Q
1"?
#250000
0K
01
0I
0"G
0"5
0"+
0"Q
0"?
#255000
1K
16
1*
11
1I
1g
1_
1"G
1"5
1"+
1"Q
1"?
1"M
1"C
#260000
0K
01
0I
0"G
0"5
0"+
0"Q
0"?
#262500
06
0*
0g
0_
0"M
0"C
#265000
1K
11
1I
1"G
1"5
1"+
1"Q
1"?
#270000
0K
01
0I
0"G
0"5
0"+
0"Q
0"?
#275000
1K
1*
11
1I
1_
1"G
1"5
1"+
1"Q
1"?
1"C
#280000
0K
01
0I
0"G
0"5
0"+
0"Q
0"?
#282500
0*
0_
0"C
#285000
1K
16
11
1I
1g
1"G
1"5
1"+
1"Q
1"?
1"M
#290000
0K
01
0I
0"G
0"5
0"+
0"Q
0"?
#292500
06
0g
0"M
#295000
1K
11
1I
1"G
1"5
1"+
1"Q
1"?
#300000
0K
01
0I
0"G
0"5
0"+
0"Q
0"?
#305000
1K
1*
11
1I
1_
1"G
1"5
1"+
1"Q
1"?
1"C
#310000
0K
01
0I
0"G
0"5
0"+
0"Q
0"?
#312500
0*
0_
0"C
#315000
1K
11
1I
1"G
1"5
1"+
1"Q
1"?
#320000
0K
01
0I
0"G
0"5
0"+
0"Q
0"?
#325000
1K
11
1I
1"G
1"5
1"+
1"Q
1"?
#330000
0K
01
0I
0"G
0"5
0"+
0"Q
0"?
#335000
1K
16
1*
11
1I
1g
1_
1"G
1"5
1"+
1"Q
1"?
1"M
1"C
#340000
0K
01
0I
0"G
0"5
0"+
0"Q
0"?
#342500
06
0g
0"M
#345000
1K
11
1I
1"G
1"5
1"+
1"Q
1"?
#350000
0K
01
0I
0"G
0"5
0"+
0"Q
0"?
#352500
0*
0_
0"C
#355000
1K
1*
16
11
1I
1_
1g
1"G
1"5
1"+
1"Q
1"?
1"C
1"M
#360000
0K
01
0I
0"G
0"5
0"+
0"Q
0"?
#362500
06
0*
0g
0_
0"M
0"C
#365000
1K
11
1I
1"G
1"5
1"+
1"Q
1"?
#370000
0K
01
0I
0"G
0"5
0"+
0"Q
0"?
#375000
1K
16
11
1I
1g
1"G
1"5
1"+
1"Q
1"?
1"M
#380000
0K
01
0I
0"G
0"5
0"+
0"Q
0"?
#382500
06
0g
0"M
#385000
1K
16
11
1I
1g
1"G
1"5
1"+
1"Q
1"?
1"M
#390000
0K
01
0I
0"G
0"5
0"+
0"Q
0"?
#392500
06
0g
0"M
#395000
1K
1*
11
1I
1_
1"G
1"5
1"+
1"Q
1"?
1"C
#400000
0K
01
0I
0"G
0"5
0"+
0"Q
0"?
#402500
0*
0_
0"C
#405000
1K
16
1*
11
1I
1g
1_
1"G
1"5
1"+
1"Q
1"?
1"M
1"C
#410000
0K
01
0I
0"G
0"5
0"+
0"Q
0"?
#412500
06
0*
0g
0_
0"M
0"C
#415000
1K
11
1I
1"G
1"5
1"+
1"Q
1"?
#420000
0K
01
0I
0"G
0"5
0"+
0"Q
0"?
#425000
1K
11
1I
1"G
1"5
1"+
1"Q
1"?
#430000
0K
01
0I
0"G
0"5
0"+
0"Q
0"?
#435000
1K
16
11
1I
1g
1"G
1"5
1"+
1"Q
1"?
1"M
#440000
0K
01
0I
0"G
0"5
0"+
0"Q
0"?
#442500
06
0g
0"M
#445000
1K
1*
11
1I
1_
1"G
1"5
1"+
1"Q
1"?
1"C
#450000
0K
01
0I
0"G
0"5
0"+
0"Q
0"?
#455000
1K
16
11
1I
1g
1"G
1"5
1"+
1"Q
1"?
1"M
#460000
0K
01
0I
0"G
0"5
0"+
0"Q
0"?
#462500
0*
06
0_
0g
0"C
0"M
#465000
1K
11
1I
1"G
1"5
1"+
1"Q
1"?
#470000
0K
01
0I
0"G
0"5
0"+
0"Q
0"?
#475000
1K
1*
11
1I
1_
1"G
1"5
1"+
1"Q
1"?
1"C
#480000
0K
01
0I
0"G
0"5
0"+
0"Q
0"?
#482500
0*
0_
0"C
#485000
1K
16
1*
11
1I
1g
1_
1"G
1"5
1"+
1"Q
1"?
1"M
1"C
#490000
0K
01
0I
0"G
0"5
0"+
0"Q
0"?
#492500
06
0*
0g
0_
0"M
0"C
#495000
1K
1*
11
1I
1_
1"G
1"5
1"+
1"Q
1"?
1"C`

console.log(vcd_file)

//var new_vcd = new VCDVCD(null, vcd_file)

//var test_data = new_vcd.get_data()

var final_data = parseWith_vcdvcd(null, vcd_file)

console.dir(final_data, { depth: null })

