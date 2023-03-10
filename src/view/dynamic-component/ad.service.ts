/*
 * @Author: hxian 2232436248@qq.com
 * @Date: 2023-03-10 10:05:48
 * @LastEditors: hxian 2232436248@qq.com
 * @LastEditTime: 2023-03-10 10:18:45
 * @FilePath: \my-app\src\view\dynamic-component\ad.service.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 *
 */
import { Injectable } from '@angular/core';
import { AdItem } from './banner/ad/ad-item';
import { MusicAd } from './banner/ad/musicAb.component';
import { MilkAd } from './banner/ad/milkAd.component';

@Injectable()
export class AdService {
  getAds(): any[] {
    return [
      new AdItem(MusicAd, '音乐广告1'),
      new AdItem(MilkAd, '牛奶广告1'),
      new AdItem(MusicAd, '音乐广告2'),
      new AdItem(MilkAd, '牛奶广告2'),
    ];
  }
}
