import { LinRouter, NotFound, disableLoading } from 'lin-mizar';
import { groupRequired, loginRequired } from '../../middleware/jwt';
import { CustomerController } from '../../controller/customerController'
import { LabelController } from '../../controller/labelController'

//user 路由实例
const labelApi = new LinRouter({
  prefix: '/v1/labels',
  module: '标签'
});

/* 添加标签
param：
{
  desc:
}
------------------------------------------
return:
{
  code:
  msg:
}
*/
labelApi.linPost('addlabel',
                  '/',
                  labelApi.permission('添加标签'),
                  groupRequired,
                  LabelController.add)
/* 删除标签
param：
------------------------------------------
return:
{
  code:
  msg:
}
*/
labelApi.linDelete('delLabel',
                    '/:id',
                    labelApi.permission('删除标签'),
                    groupRequired,
                    LabelController.delete)
/* 编辑标签
param：
{
  desc:
}
------------------------------------------
return:
{
  code:
  msg:
}
*/
labelApi.linPatch('editLabel',
                '/:id',
                labelApi.permission('编辑标签'),
                groupRequired,
                LabelController.edit)
/* 查询标签
param：
?page=xx&&page_size=xx
------------------------------------------
return:
[
  {
    id:
    desc:
  },
  ...
]
*/
labelApi.linGet('queryLabel',
                '/',
                labelApi.permission('查询标签'),
                LabelController.query)

export { labelApi }
