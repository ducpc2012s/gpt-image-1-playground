import * as React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import Image from 'next/image';

const ARCHITECTURE_STYLES = [
  'Modern',
  'Classic',
  'Minimalist',
  'Neoclassical',
  'Japanese',
  'Mediterranean',
  'Industrial',
  'Scandinavian',
  'Other',
];

export function ArchitectureRenderBlock() {
  const [style, setStyle] = React.useState('Modern');
  const [refImageUrl, setRefImageUrl] = React.useState<string | null>(null);
  const [inputImage, setInputImage] = React.useState<File | null>(null);
  const [inputImageUrl, setInputImageUrl] = React.useState<string | null>(null);
  const [systemPrompt, setSystemPrompt] = React.useState('');

  React.useEffect(() => {
    if (style && inputImage) {
      setSystemPrompt(
        `Bạn là một AI chuyên render kiến trúc. Hãy nhận diện và tạo ra hình ảnh render chân thực, bám sát nét vẽ và kiến trúc từ ảnh đầu vào (lineart hoặc render thô). Phong cách: ${style}. Nếu có ảnh style tham chiếu, hãy áp dụng màu sắc, vật liệu, ánh sáng tương tự.`
      );
    }
  }, [style, inputImage]);

  const handleRefImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setRefImageUrl(file ? URL.createObjectURL(file) : null);
  };
  const handleInputImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setInputImage(file);
    setInputImageUrl(file ? URL.createObjectURL(file) : null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Gửi inputImage, refImage, systemPrompt lên API xử lý
    alert('Chức năng này sẽ gửi ảnh và prompt lên AI để render!');
  };

  return (
    <Card className='mt-8 border-animated-tech w-full bg-white/80 dark:bg-black/60 text-card-foreground flex flex-col gap-6 rounded-2xl border-2 border-transparent backdrop-blur-sm'>
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle>Render Kiến Trúc Tự Động</CardTitle>
          <CardDescription>
            Chọn phong cách kiến trúc, tải lên ảnh style tham chiếu (nếu có) và ảnh lineart/render thô. AI sẽ tự động tạo ảnh render chân thực, bám sát nét vẽ và kiến trúc đầu vào.
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div>
            <Label>Phong cách kiến trúc</Label>
            <Select value={style} onValueChange={setStyle}>
              <SelectTrigger className='mt-1 w-full'>
                <SelectValue placeholder='Chọn phong cách' />
              </SelectTrigger>
              <SelectContent>
                {ARCHITECTURE_STYLES.map((s) => (
                  <SelectItem key={s} value={s}>{s}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Ảnh style tham chiếu (tùy chọn)</Label>
            <Input type='file' accept='image/*' onChange={handleRefImageChange} />
            {refImageUrl && (
              <Image src={refImageUrl} alt='Style reference' width={120} height={120} className='mt-2 rounded border' />
            )}
          </div>
          <div>
            <Label>Ảnh lineart hoặc render thô (bắt buộc)</Label>
            <Input type='file' accept='image/*' onChange={handleInputImageChange} required />
            {inputImageUrl && (
              <Image src={inputImageUrl} alt='Input lineart' width={120} height={120} className='mt-2 rounded border' />
            )}
          </div>
          <div>
            <Label>System Prompt (tự động)</Label>
            <textarea className='w-full rounded border p-2 text-xs bg-black/30 text-white' value={systemPrompt} readOnly rows={3} />
          </div>
        </CardContent>
        <CardFooter>
          <Button type='submit' disabled={!inputImage} className='w-full font-semibold text-base bg-tech-blue hover:bg-tech-purple text-white border-2 border-tech-purple/60 shadow-md transition-all duration-200 rounded-xl'>Render Ảnh Kiến Trúc</Button>
        </CardFooter>
      </form>
    </Card>
  );
} 