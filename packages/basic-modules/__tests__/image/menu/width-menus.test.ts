/**
 * @description image width menus test
 * @author wangfupeng
 */

import { Editor } from 'slate'
import createEditor from '../../../../../tests/utils/create-editor'
import Width30 from '../../../src/modules/image/menu/Width30'
import Width40 from '../../../src/modules/image/menu/Width40'
import Width50 from '../../../src/modules/image/menu/Width50'
import Width60 from '../../../src/modules/image/menu/Width60'
import Width80 from '../../../src/modules/image/menu/Width80'
import Width100 from '../../../src/modules/image/menu/Width100'

describe('image width menus', () => {
  const width30Menu = new Width30()
  const width40Menu = new Width40()
  const width50Menu = new Width50()
  const width60Menu = new Width60()
  const width80Menu = new Width80()
  const width100Menu = new Width100()

  let editor: any
  let startLocation: any

  const src = 'https://www.wangeditor.com/imgs/logo.png'
  const alt = 'logo'
  const href = 'https://www.wangeditor.com/'

  beforeEach(() => {
    editor = createEditor()
    startLocation = Editor.start(editor, [])
  })

  afterEach(() => {
    editor = null
    startLocation = null
  })

  // getValue isActive 无逻辑，不用测试

  it('is disabled', () => {
    editor.deselect()
    expect(width30Menu.isDisabled(editor)).toBeTruthy()
    expect(width40Menu.isDisabled(editor)).toBeTruthy()
    expect(width50Menu.isDisabled(editor)).toBeTruthy()
    expect(width60Menu.isDisabled(editor)).toBeTruthy()
    expect(width80Menu.isDisabled(editor)).toBeTruthy()
    expect(width100Menu.isDisabled(editor)).toBeTruthy()

    editor.select(startLocation)
    expect(width30Menu.isDisabled(editor)).toBeTruthy()
    expect(width40Menu.isDisabled(editor)).toBeTruthy()
    expect(width50Menu.isDisabled(editor)).toBeTruthy()
    expect(width60Menu.isDisabled(editor)).toBeTruthy()
    expect(width80Menu.isDisabled(editor)).toBeTruthy()
    expect(width100Menu.isDisabled(editor)).toBeTruthy()

    const elem = {
      type: 'image',
      src,
      alt,
      href,
      style: { width: '100', height: '80' },
      children: [{ text: '' }], // void node 必须包含一个空 text
    }
    editor.insertNode(elem) // 插入图片
    editor.select({
      path: [0, 1, 0], // 选中图片
      offset: 0,
    })
    expect(width30Menu.isDisabled(editor)).toBeFalsy()
    expect(width40Menu.isDisabled(editor)).toBeFalsy()
    expect(width50Menu.isDisabled(editor)).toBeFalsy()
    expect(width60Menu.isDisabled(editor)).toBeFalsy()
    expect(width80Menu.isDisabled(editor)).toBeFalsy()
    expect(width100Menu.isDisabled(editor)).toBeFalsy()
  })

  it('exec', () => {
    editor.select(startLocation)
    const elem = {
      type: 'image',
      src,
      alt,
      href,
      style: { width: '100', height: '80' },
      children: [{ text: '' }], // void node 必须包含一个空 text
    }
    editor.insertNode(elem) // 插入图片
    editor.select({
      path: [0, 1, 0], // 选中图片
      offset: 0,
    })

    width30Menu.exec(editor, '')
    const image1 = editor.getElemsByTypePrefix('image')[0]
    expect(image1.style.width).toBe('30%')
    expect(image1.style.height).toBe('')

    width40Menu.exec(editor, '')
    const image2 = editor.getElemsByTypePrefix('image')[0]
    expect(image2.style.width).toBe('40%')
    expect(image2.style.height).toBe('')

    width50Menu.exec(editor, '')
    const image3 = editor.getElemsByTypePrefix('image')[0]
    expect(image3.style.width).toBe('50%')
    expect(image3.style.height).toBe('')

    width60Menu.exec(editor, '')
    const image4 = editor.getElemsByTypePrefix('image')[0]
    expect(image4.style.width).toBe('60%')
    expect(image4.style.height).toBe('')

    width80Menu.exec(editor, '')
    const image5 = editor.getElemsByTypePrefix('image')[0]
    expect(image5.style.width).toBe('80%')
    expect(image5.style.height).toBe('')

    width100Menu.exec(editor, '')
    const image6 = editor.getElemsByTypePrefix('image')[0]
    expect(image6.style.width).toBe('100%')
    expect(image6.style.height).toBe('')
  })
})
