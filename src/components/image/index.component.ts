// 开源项目，未经作者同意，不得以抄袭/复制代码/修改源代码版权信息。
// Copyright @ 2018-present xiejiahe. All rights reserved.
// See https://github.com/xjh22222228/nav

import { Component, Input } from '@angular/core'
import type { IComponentItemProps } from 'src/types'
import { JumpService } from 'src/services/jump'
import { component } from 'src/store'

@Component({
  standalone: true,
  selector: 'app-image',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class ImageComponent {
  @Input() data!: IComponentItemProps

  readonly component = component

  constructor(public jumpService: JumpService) {}
}
